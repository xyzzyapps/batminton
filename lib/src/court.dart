// Court rules for one singles match.
// The court runs from the bottom of the picture to the top.
// x is left to right. -1 is the left sideline. 1 is the right sideline.
// z is depth. 0 is the near baseline. 1 is the far baseline.
// h is the height of the shuttle above the court.

const double netZ = 0.5;
const double serviceNear = 0.32;
const double serviceFar = 0.68;
const double netH = 0.15;
const double gravity = 0.00032;
const double drag = 0.9985;
const double moveX = 0.028;
const double moveZ = 0.0105;

const double nearY = 208;
const double farY = 64;
const double nearHalf = 104;
const double farHalf = 56;
const double centerX = 128;
const double liftScale = 100;

enum Phase { title, ready, play, banner, gameOver }

class Controls {
  bool left = false;
  bool right = false;
  bool up = false;
  bool down = false;
  bool swing = false;
  bool charging = false;
  bool start = false;
  bool mute = false;

  void clearEdges() {
    swing = false;
    start = false;
    mute = false;
  }
}

class Shuttle {
  double x = 0;
  double z = 0.2;
  double h = 0;
  double vx = 0;
  double vz = 0;
  double vh = 0;
  bool alive = false;
  bool serve = false;
  bool clearedNet = false;
  bool hitNet = false;
  int lastHitter = -1;

  Shuttle copy() {
    return Shuttle()
      ..x = x
      ..z = z
      ..h = h
      ..vx = vx
      ..vz = vz
      ..vh = vh
      ..alive = alive
      ..serve = serve
      ..clearedNet = clearedNet
      ..hitNet = hitNet
      ..lastHitter = lastHitter;
  }
}

class Athlete {
  Athlete({
    required this.side,
    required this.dir,
    required this.z,
    required this.minZ,
    required this.maxZ,
  });

  final int side;
  final int dir;
  double x = 0;
  double z;
  final double minZ;
  final double maxZ;
  int swingT = 0;
  bool moving = false;
  double power = 0.45;
  double aimX = 0;
  double aimZ = 0;
}

class Spark {
  Spark(this.x, this.z, this.h, this.vx, this.vz, this.vh, this.color);
  double x;
  double z;
  double h;
  double vx;
  double vz;
  double vh;
  int life = 12;
  final int color;
}

class ScreenPoint {
  const ScreenPoint(this.x, this.y);
  final double x;
  final double y;
}

/// Maps a court point onto the picture.
/// [x] is the lateral position. [z] is the depth. [h] is the height.
ScreenPoint project(double x, double z, double h) {
  final half = nearHalf + (farHalf - nearHalf) * z;
  final ground = nearY + (farY - nearY) * z;
  return ScreenPoint(centerX + x * half, ground - h * liftScale);
}

class Court {
  Court({int seed = 1}) : _rng = seed & 0x7fffffff;

  int _rng;
  int tick = 0;
  Phase phase = Phase.title;
  bool paused = false;
  bool muted = false;
  int scoreL = 0;
  int scoreR = 0;
  int server = 0;
  int bannerTimer = 0;
  int freeze = 0;
  int shake = 0;
  int chargeFrames = 0;
  static const int chargeMax = 48;
  int cpuThinkUntil = 0;
  double? cpuCommit;
  int flashSide = -1;
  int flashT = 0;
  String banner = '';
  void Function(String event)? onSfx;

  final near = Athlete(side: 0, dir: 1, z: 0.16, minZ: 0.05, maxZ: 0.44);
  final far = Athlete(side: 1, dir: -1, z: 0.84, minZ: 0.56, maxZ: 0.95);
  final shuttle = Shuttle();
  final sparks = <Spark>[];
  final trail = <(double, double, double)>[];

  int _nextRng() {
    _rng = (1664525 * _rng + 1013904223) & 0x7fffffff;
    return _rng;
  }

  int _roll(int n) => _nextRng() % n;

  Athlete get _serverAthlete => server == 0 ? near : far;

  /// 1 when the near player wins. 2 when the far player wins.
  /// A game is won at 11 points with a lead of 2, or at 15.
  int winner() {
    if (scoreL >= 15) return 1;
    if (scoreR >= 15) return 2;
    if (scoreL >= 11 && scoreL - scoreR >= 2) return 1;
    if (scoreR >= 11 && scoreR - scoreL >= 2) return 2;
    return 0;
  }

  String get statusLine {
    if (scoreL >= 10 && scoreR >= 10) {
      if (scoreL == scoreR) return 'DEUCE';
      if (scoreL > scoreR) return 'ADV 1P';
      return 'ADV COM';
    }
    return '';
  }

  void update(Controls input) {
    tick++;
    if (input.mute) muted = !muted;
    if (shake > 0) shake--;
    if (flashT > 0) flashT--;

    switch (phase) {
      case Phase.title:
        if (input.start || input.swing) _beginMatch();
      case Phase.gameOver:
        if (input.start || input.swing) _beginMatch();
      case Phase.ready:
        if (--bannerTimer <= 0) _toss();
      case Phase.banner:
        if (--bannerTimer <= 0) {
          if (winner() != 0) {
            phase = Phase.gameOver;
            banner = winner() == 1 ? 'YOU WIN' : 'YOU LOSE';
            onSfx?.call(winner() == 1 ? 'win' : 'lose');
          } else {
            _ready();
          }
        }
      case Phase.play:
        if (input.start) paused = !paused;
        if (!paused) _play(input);
    }
    _stepSparks();
  }

  void _beginMatch() {
    scoreL = 0;
    scoreR = 0;
    server = 0;
    paused = false;
    onSfx?.call('start');
    _ready();
  }

  void _ready() {
    phase = Phase.ready;
    banner = server == 0 ? 'YOUR SERVE' : 'COM SERVE';
    bannerTimer = 46;
    shuttle.alive = false;
    trail.clear();
    cpuThinkUntil = 0;
    cpuCommit = null;
    chargeFrames = 0;
    near
      ..x = server == 0 ? -0.22 : 0.18
      ..z = server == 0 ? 0.14 : 0.24
      ..swingT = 0;
    far
      ..x = server == 1 ? 0.22 : -0.18
      ..z = server == 1 ? 0.86 : 0.76
      ..swingT = 0;
    freeze = 0;
  }

  void _toss() {
    final a = _serverAthlete;
    phase = Phase.play;
    banner = '';
    shuttle
      ..x = a.x
      ..z = a.z + a.dir * 0.03
      ..h = 0.06
      ..vx = 0
      ..vz = a.dir * 0.0006
      ..vh = 0.013
      ..alive = true
      ..serve = true
      ..clearedNet = false
      ..hitNet = false
      ..lastHitter = -1;
    trail
      ..clear()
      ..add((shuttle.x, shuttle.z, shuttle.h));
  }

  void _play(Controls human) {
    if (freeze > 0) {
      freeze--;
      return;
    }
    if (human.swing && near.swingT == 0) {
      final wish = shotWish(human, chargeFrames);
      near
        ..power = wish.power
        ..aimX = wish.aimX
        ..aimZ = wish.aimZ;
      chargeFrames = 0;
    } else if (human.charging) {
      if (chargeFrames < chargeMax) chargeFrames++;
      final preview = shotWish(human, chargeFrames);
      near
        ..power = preview.power
        ..aimX = preview.aimX
        ..aimZ = preview.aimZ;
    }
    final cpu = _cpu();
    _move(near, human, locked: human.charging);
    _move(far, cpu);
    if (!shuttle.alive) return;
    final prevX = shuttle.x;
    final prevZ = shuttle.z;
    final prevH = shuttle.h;
    final hitterBefore = shuttle.lastHitter;
    final landed = stepShuttle(shuttle);
    trail.add((shuttle.x, shuttle.z, shuttle.h));
    if (trail.length > 8) trail.removeAt(0);
    final nearHit = _tryHit(near, human, prevX, prevZ, prevH);
    if (!nearHit) _tryHit(far, cpu, prevX, prevZ, prevH);
    if (landed && shuttle.lastHitter == hitterBefore) _resolveLanding();
  }

  void _move(Athlete a, Controls c, {bool locked = false}) {
    if (locked) {
      a.moving = false;
      return;
    }
    var speedX = moveX;
    var speedZ = moveZ;
    if (a.swingT > 0) {
      speedX *= 0.7;
      speedZ *= 0.7;
    }
    if (c.left) a.x -= speedX;
    if (c.right) a.x += speedX;
    if (c.up) a.z += speedZ;
    if (c.down) a.z -= speedZ;
    a.moving = c.left || c.right || c.up || c.down;
    a.x = a.x.clamp(-0.88, 0.88).toDouble();
    a.z = a.z.clamp(a.minZ, a.maxZ).toDouble();
  }

  Controls _cpu() {
    final a = far;
    final c = Controls();
    if (!shuttle.alive) return c;
    final ownServe = shuttle.serve && shuttle.lastHitter < 0 && server == 1;
    final coming = shuttle.lastHitter != 1 &&
        (shuttle.vz > 0.0015 || (shuttle.vz.abs() <= 0.0015 && shuttle.z > netZ));
    double targetX;
    double targetZ;
    if (ownServe) {
      cpuCommit = null;
      targetX = shuttle.x;
      targetZ = shuttle.z - a.dir * 0.02;
    } else if (coming && tick < cpuThinkUntil) {
      targetX = a.x;
      targetZ = a.z;
    } else if (coming) {
      final mark = _predictIntercept();
      cpuCommit ??= mark.$1 + (_roll(21) - 10) / 40;
      targetX = cpuCommit!;
      targetZ = mark.$2;
    } else {
      cpuCommit = null;
      targetX = 0;
      targetZ = 0.8;
    }
    targetZ = targetZ.clamp(a.minZ, a.maxZ).toDouble();
    if (a.x > targetX + 0.03) c.left = true;
    if (a.x < targetX - 0.03) c.right = true;
    if (a.z < targetZ - 0.02) c.up = true;
    if (a.z > targetZ + 0.02) c.down = true;

    final nearEnough = (shuttle.x - a.x).abs() < (shuttle.vh.abs() > 0.02 ? 0.16 : 0.2) &&
        (shuttle.z - a.z).abs() < 0.09 &&
        shuttle.h < 0.34 &&
        shuttle.h > 0.02;
    if (a.swingT == 0 &&
        nearEnough &&
        tick >= cpuThinkUntil &&
        shuttle.lastHitter != 1) {
      if (!ownServe || shuttle.vh < 0.004) {
        a.power = 0.4 + _roll(11) / 16;
        a.aimX = (_roll(5) - 2) / 2;
        a.aimZ = _roll(4) == 0 ? -1 : (_roll(3) == 0 ? 1 : 0);
        c.swing = true;
      }
    }
    return c;
  }

  (double, double) _predictIntercept() {
    final copy = shuttle.copy();
    for (var i = 0; i < 420 && copy.alive; i++) {
      final h0 = copy.h;
      final z0 = copy.z;
      if (stepShuttle(copy)) return (copy.x, copy.z - 0.04);
      final falling = copy.h <= h0;
      if (falling && z0 < 0.78 && copy.z >= 0.78 && copy.h < 0.28) {
        return (copy.x, 0.78);
      }
    }
    return (copy.x, 0.8);
  }

  bool _tryHit(Athlete a, Controls c, double prevX, double prevZ, double prevH) {
    if (c.swing && a.swingT == 0) {
      a.swingT = 24;
      onSfx?.call('swing');
    }
    if (a.swingT <= 0 || !shuttle.alive) {
      if (a.swingT > 0) a.swingT--;
      return false;
    }
    final hot = a.swingT <= 16 && a.swingT >= 8;
    a.swingT--;
    if (!hot || shuttle.lastHitter == a.side) return false;
    final serveToss = shuttle.serve && shuttle.lastHitter < 0;
    final reachX = serveToss ? 0.3 : 0.2;
    final reachZ = serveToss ? 0.12 : 0.085;
    final reachH = serveToss ? 0.28 : 0.32;
    if (shuttle.h > reachH) return false;
    final dist = _distToSegment(a.x, a.z, prevX, prevZ, shuttle.x, shuttle.z);
    final closeH = (shuttle.h - prevH).abs() < reachH || shuttle.h < reachH;
    if (dist <= (reachX + reachZ) / 2 && closeH && (shuttle.z - a.z).abs() < reachZ + 0.02) {
      _strike(a);
      return true;
    }
    return false;
  }

  void _strike(Athlete a) {
    final firstServe = shuttle.serve && shuttle.lastHitter < 0;
    final front = (a.dir > 0 && shuttle.z > 0.3) || (a.dir < 0 && shuttle.z < 0.7);
    final String kind;
    if (firstServe) {
      kind = 'serve';
    } else if (front && shuttle.h > netH + 0.04) {
      kind = 'smash';
    } else if (front) {
      kind = 'drop';
    } else if (shuttle.h > 0.22) {
      kind = 'clear';
    } else {
      kind = 'drive';
    }
    final error = a.side == 1 ? (_roll(17) - 8) / 28 : 0.0;
    final launch = planLaunch(
      x: shuttle.x,
      z: shuttle.z,
      h: shuttle.h,
      dir: a.dir,
      kind: kind,
      power: a.power,
      aimX: a.aimX,
      aimZ: a.aimZ,
      error: a.side == 1 ? error : 0,
    );
    shuttle
      ..vx = launch.vx
      ..vz = launch.vz
      ..vh = launch.vh
      ..lastHitter = a.side
      ..clearedNet = false
      ..hitNet = false
      ..alive = true;
    if (!firstServe) shuttle.serve = false;
    if (a.side == 0) {
      cpuCommit = null;
      cpuThinkUntil = tick + (kind == 'smash' || kind == 'drop' ? 18 : 10);
    }
    freeze = a.power > 0.75 ? 4 : 2;
    if (a.power > 0.7) shake = 4 + (a.power * 6).round();
    flashSide = a.side;
    flashT = 8;
    _spawnSparks(shuttle.x, shuttle.z, shuttle.h, a.power > 0.7);
    final sound = a.power > 0.75
        ? 'smash'
        : a.aimZ < 0 && a.power < 0.45
            ? 'drop'
            : 'hit';
    onSfx?.call(sound);
  }

  void _spawnSparks(double x, double z, double h, bool smash) {
    final n = smash ? 7 : 5;
    for (var i = 0; i < n; i++) {
      sparks.add(Spark(
        x,
        z,
        h,
        (_roll(9) - 4) / 80,
        (_roll(9) - 4) / 120,
        0.004 + _roll(5) / 800,
        smash ? 10 : 2,
      ));
    }
  }

  void _resolveLanding() {
    shuttle.alive = false;
    trail.clear();
    final hitter = shuttle.lastHitter;
    if (hitter < 0) {
      _award(1 - server, 'FAULT');
      return;
    }
    final onFar = shuttle.z > netZ && shuttle.z <= 1 && shuttle.x.abs() <= 1;
    final onNear = shuttle.z < netZ && shuttle.z >= 0 && shuttle.x.abs() <= 1;
    final onReceiver = hitter == 0 ? onFar : onNear;

    if (shuttle.serve) {
      final inBox = hitter == 0
          ? shuttle.z >= serviceFar && shuttle.z <= 1 && shuttle.x.abs() <= 1
          : shuttle.z <= serviceNear && shuttle.z >= 0 && shuttle.x.abs() <= 1;
      if (shuttle.hitNet && inBox && onReceiver) {
        banner = 'LET';
        phase = Phase.banner;
        bannerTimer = 50;
        onSfx?.call('let');
        return;
      }
      if (!shuttle.clearedNet || shuttle.hitNet || !inBox) {
        _award(1 - hitter, 'FAULT');
        return;
      }
      _award(hitter, 'POINT');
      return;
    }

    if (onReceiver && shuttle.clearedNet) {
      _award(hitter, 'POINT');
      return;
    }
    if (shuttle.x.abs() > 1 || shuttle.z < 0 || shuttle.z > 1) {
      _award(1 - hitter, 'OUT');
      return;
    }
    _award(1 - hitter, 'FAULT');
  }

  void _award(int side, String text) {
    if (side == 0) {
      scoreL++;
    } else {
      scoreR++;
    }
    server = side;
    banner = text;
    phase = Phase.banner;
    bannerTimer = 70;
    flashSide = side;
    flashT = 20;
    onSfx?.call(text == 'POINT' ? 'point' : 'fault');
  }

  void _stepSparks() {
    for (final s in sparks) {
      s.x += s.vx;
      s.z += s.vz;
      s.h += s.vh;
      s.vh -= 0.0006;
      s.life--;
    }
    sparks.removeWhere((s) => s.life <= 0);
  }
}

class Launch {
  Launch(this.vx, this.vz, this.vh);
  final double vx;
  final double vz;
  final double vh;
}

class Flight {
  Flight(this.shuttle, this.frames);
  final Shuttle shuttle;
  final int frames;
}

/// Chooses a flight that lands near the target for [kind].
/// [dir] is 1 when the shot travels toward the far baseline.
class ShotWish {
  ShotWish(this.power, this.aimX, this.aimZ);
  final double power;
  final double aimX;
  final double aimZ;
}

/// [frames] is how long the swing button has been held.
/// A short hold is a soft shot. A long hold is a hard shot.
ShotWish shotWish(Controls controls, int frames) {
  final power = frames <= 2 ? 0.22 : (frames / Court.chargeMax).clamp(0.22, 1.0);
  final aimX = (controls.right ? 1.0 : 0.0) - (controls.left ? 1.0 : 0.0);
  final aimZ = (controls.up ? 1.0 : 0.0) - (controls.down ? 1.0 : 0.0);
  return ShotWish(power, aimX, aimZ);
}

/// Court point the shot is aimed at.
/// [aimX] is -1 for left and 1 for right.
/// [aimZ] is -1 for a short shot and 1 for a deep shot.
(double, double) shotTarget({
  required int dir,
  required double power,
  required double aimX,
  required double aimZ,
  required bool serve,
}) {
  var depth = 0.6 + aimZ * 0.16 + power * 0.18;
  if (serve) depth = 0.74 + aimZ * 0.08 + power * 0.08;
  final cap = serve ? 0.68 : 0.54;
  if (depth < cap) depth = cap;
  if (depth > 0.96) depth = 0.96;
  final lateral = (aimX * (0.25 + power * 0.55)).clamp(-0.84, 0.84);
  return (lateral, dir > 0 ? depth : 1 - depth);
}

Launch planLaunch({
  required double x,
  required double z,
  required double h,
  required int dir,
  required String kind,
  double power = 0.5,
  double aimX = 0,
  double aimZ = 0,
  double error = 0,
}) {
  final serve = kind == 'serve';
  final target = shotTarget(
    dir: dir,
    power: power,
    aimX: aimX + error,
    aimZ: aimZ,
    serve: serve,
  );
  final targetX = target.$1;
  final targetZ = target.$2;
  var vh = 0.014 - power * 0.005;
  if (aimZ < 0) vh += 0.003;
  if (vh < 0.008) vh = 0.008;
  if (vh > 0.018) vh = 0.018;
  final travel = (targetZ - z).abs();
  var speed = travel * (0.007 + power * 0.010);
  final minSpeed = serve ? 0.004 : 0.004 + power * 0.005;
  final maxSpeed = 0.007 + power * 0.010;
  if (speed < minSpeed) speed = minSpeed;
  var best = Launch(0, dir * speed, vh);
  for (var n = 0; n < 12; n++) {
    final flight = flyShuttle(x, z, h, 0, dir * speed, vh);
    final end = flight.shuttle;
    if (end.hitNet || !end.clearedNet) {
      vh += 0.0016;
      if (vh > 0.022) vh = 0.022;
      best = Launch(0, dir * speed, vh);
      continue;
    }
    final frames = flight.frames < 1 ? 1 : flight.frames;
    final vx = (targetX - x) / frames;
    best = Launch(vx, dir * speed, vh);
    final miss = dir > 0 ? targetZ - end.z : end.z - targetZ;
    if (miss.abs() < 0.04) break;
    speed += miss * 0.025;
    if (speed < minSpeed * 0.7) speed = minSpeed * 0.7;
    if (speed > maxSpeed) speed = maxSpeed;
  }
  return best;
}

Flight flyShuttle(double x, double z, double h, double vx, double vz, double vh) {
  final shuttle = Shuttle()
    ..x = x
    ..z = z
    ..h = h
    ..vx = vx
    ..vz = vz
    ..vh = vh
    ..alive = true;
  var frames = 0;
  while (frames < 500) {
    frames++;
    if (stepShuttle(shuttle)) break;
  }
  return Flight(shuttle, frames);
}

/// Moves the shuttle one frame. Returns true when it meets the court.
bool stepShuttle(Shuttle s) {
  if (!s.alive) return false;
  final z0 = s.z;
  final h0 = s.h;
  s.vh -= gravity;
  s.vx *= drag;
  s.vz *= drag;
  s.vh *= drag;
  s.x += s.vx;
  s.z += s.vz;
  s.h += s.vh;
  if (s.h > 0.7) {
    s.h = 0.7;
    s.vh = -s.vh.abs() * 0.35;
  }
  final crossed = (z0 < netZ && s.z >= netZ) || (z0 > netZ && s.z <= netZ);
  if (crossed) {
    final dz = s.z - z0;
    final t = dz == 0 ? 0.0 : (netZ - z0) / dz;
    final hCross = h0 + (s.h - h0) * t;
    if (hCross < netH) {
      final speed = s.vz.abs();
      s.hitNet = true;
      s.z = z0 < netZ ? netZ - 0.02 : netZ + 0.02;
      s.vz = (z0 < netZ ? -1 : 1) * (speed * 0.15 + 0.002);
      s.vh = 0.004;
      if (s.h < hCross) s.h = hCross;
    } else {
      s.clearedNet = true;
    }
  }
  if (s.h <= 0) {
    s.h = 0;
    s.vx = 0;
    s.vz = 0;
    s.vh = 0;
    return true;
  }
  return false;
}

double _distToSegment(double px, double py, double x0, double y0, double x1, double y1) {
  final dx = x1 - x0;
  final dy = y1 - y0;
  final len2 = dx * dx + dy * dy;
  var t = 0.0;
  if (len2 > 0.0000001) {
    t = ((px - x0) * dx + (py - y0) * dy) / len2;
    if (t < 0) t = 0;
    if (t > 1) t = 1;
  }
  final qx = x0 + dx * t - px;
  final qy = y0 + dy * t - py;
  return _sqrt(qx * qx + qy * qy);
}

double _sqrt(double v) {
  if (v <= 0) return 0;
  var g = v;
  for (var i = 0; i < 8; i++) {
    g = 0.5 * (g + v / g);
  }
  return g;
}
