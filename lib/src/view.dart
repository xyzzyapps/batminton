import 'court.dart';
import 'framebuffer.dart';
import 'palette.dart';
import 'sprites.dart';

void render(Framebuffer fb, Court court) {
  if (court.phase == Phase.title) {
    _title(fb, court.tick);
    return;
  }
  _hall(fb, court.tick);
  _shadow(fb, court.near.x, court.near.z, 7);
  _shadow(fb, court.far.x, court.far.z, 5);
  if (court.shuttle.alive) {
    _shadow(fb, court.shuttle.x, court.shuttle.z, 2 + (court.shuttle.h * 4).round());
  }
  _athlete(fb, court, court.far);
  _racket(fb, court, court.far);
  _net(fb);
  _aimMark(fb, court);
  _shuttle(fb, court);
  _athlete(fb, court, court.near);
  _racket(fb, court, court.near);
  for (final spark in court.sparks) {
    final p = project(spark.x, spark.z, spark.h < 0 ? 0 : spark.h);
    fb.pset(p.x.round(), p.y.round(), spark.color);
  }
  _hud(fb, court);
  if (court.paused) {
    _panel(fb, 'PAUSE');
  } else if (court.phase == Phase.ready ||
      court.phase == Phase.banner ||
      court.phase == Phase.gameOver) {
    _panel(fb, court.banner);
    if (court.phase == Phase.gameOver && (court.tick ~/ 28) % 2 == 0) {
      _center(fb, 'PRESS START', 156, Pal.gold, 1);
    }
  }
}

void _title(Framebuffer fb, int tick) {
  _hall(fb, tick);
  _net(fb);
  fb.blit(
    backReady,
    _feetX(0, 0.18, backReady, 2),
    _feetY(0.18, backReady, 2),
    shirt: Pal.red,
    shirtDark: Pal.redDark,
    scale: 2,
  );
  _blitRacket(fb, 0, 0.18, backReady, 16, 8, false, racketSide);
  fb.blit(
    frontReady,
    _feetX(0, 0.82, frontReady, 2),
    _feetY(0.82, frontReady, 2),
    flipX: true,
    shirt: Pal.blue,
    shirtDark: Pal.blueDark,
    scale: 2,
  );
  _blitRacket(fb, 0, 0.82, frontReady, 2, 8, true, racketSide);
  final hop = (tick ~/ 4) % 20;
  final lift = hop < 10 ? hop : 20 - hop;
  final bob = project(0.62, 0.38, 0.16 + lift / 90);
  fb.blit(shuttleFrames[(tick ~/ 6) & 3], bob.x.round() - 8, bob.y.round() - 8, scale: 2);

  fb.rect(28, 16, 200, 44, Pal.navy);
  fb.rect(28, 16, 200, 2, Pal.gold);
  fb.rect(28, 58, 200, 2, Pal.gold);
  _center(fb, 'BADMINTON', 22, Pal.gold, 3);
  _center(fb, 'FAMICOM SINGLES', 42, Pal.white, 1);
  _center(fb, 'FIRST TO 11', 50, Pal.lime, 1);
  if ((tick ~/ 30) % 2 == 0) {
    _center(fb, 'PRESS START', 96, Pal.gold, 2);
  }
  fb.rect(0, 220, 256, 20, Pal.navy);
  _center(fb, 'HOLD SPACE TO AIM', 222, Pal.white, 1);
  _center(fb, 'ARROWS SET DIRECTION', 230, Pal.gold, 1);
}

void _hall(Framebuffer fb, int tick) {
  fb.clear(Pal.skyDeep);
  fb.rect(0, 16, 256, 28, Pal.sky);
  fb.rect(0, 36, 256, 26, Pal.wall);
  _fans(fb, tick);

  final y0 = farY.round();
  final y1 = nearY.round();
  for (var y = y0; y <= y1; y++) {
    final z = (y - nearY) / (farY - nearY);
    final half = nearHalf + (farHalf - nearHalf) * z;
    final left = (centerX - half).round();
    final right = (centerX + half).round();
    for (var x = left + 1; x < right; x++) {
      fb.pset(x, y, ((x + y) & 3) == 0 ? Pal.courtDark : Pal.court);
    }
    fb.pset(left, y, Pal.white);
    fb.pset(right, y, Pal.white);
  }
  fb.rect(0, y1 + 1, 256, Framebuffer.height - y1 - 1, Pal.woodDark);
  _rule(fb, 0.0);
  _rule(fb, 1.0);
  _rule(fb, serviceNear);
  _rule(fb, serviceFar);
  _mark(fb, 0, 0, serviceNear);
  _mark(fb, 0, serviceFar, 1);
}

void _rule(Framebuffer fb, double z) {
  final a = project(-1, z, 0);
  final b = project(1, z, 0);
  fb.line(a.x.round(), a.y.round(), b.x.round(), b.y.round(), Pal.white);
}

void _mark(Framebuffer fb, double x, double z0, double z1) {
  final a = project(x, z0, 0);
  final b = project(x, z1, 0);
  fb.line(a.x.round(), a.y.round(), b.x.round(), b.y.round(), Pal.white);
}

void _fans(Framebuffer fb, int tick) {
  const shirts = <int>[Pal.red, Pal.blue, Pal.gold, Pal.white, Pal.lime, Pal.blueDark];
  for (var i = 0; i < 15; i++) {
    final bob = ((tick ~/ 16) + i) & 1;
    final x = 4 + i * 17;
    final y = 40 + bob;
    final shirt = shirts[i % shirts.length];
    fb.rect(x + 2, y, 4, 3, Pal.hair);
    fb.rect(x + 1, y + 3, 6, 4, Pal.skin);
    fb.pset(x + 2, y + 4, Pal.black);
    fb.pset(x + 4, y + 4, Pal.black);
    fb.rect(x + 1, y + 7, 6, 4, shirt);
  }
}

void _net(Framebuffer fb) {
  final groundL = project(-1.04, netZ, 0);
  final groundR = project(1.04, netZ, 0);
  final topL = project(-1.04, netZ, netH);
  final topR = project(1.04, netZ, netH);
  final y0 = topL.y.round();
  final y1 = groundL.y.round();
  for (var y = y0; y <= y1; y++) {
    final t = y1 == y0 ? 0.0 : (y - y0) / (y1 - y0);
    final xL = topL.x + (groundL.x - topL.x) * t;
    final xR = topR.x + (groundR.x - topR.x) * t;
    final left = xL.round();
    final right = xR.round();
    for (var x = left; x <= right; x++) {
      final tape = y < y0 + 2;
      if (tape || x == left || x == right || ((x + y) & 1) == 0) {
        fb.pset(x, y, Pal.white);
      } else {
        fb.pset(x, y, Pal.black);
      }
    }
  }
}

void _shadow(Framebuffer fb, double x, double z, int r) {
  final p = project(x, z, 0);
  final radius = r.clamp(1, 8);
  for (var i = -radius; i <= radius; i++) {
    fb.pset(p.x.round() + i, p.y.round(), Pal.shadow);
  }
}

void _athlete(Framebuffer fb, Court court, Athlete a) {
  final sprite = _pose(court, a);
  const scale = 2;
  final bob = !a.moving && a.swingT == 0 && ((court.tick ~/ 20) & 1) == 1 ? 1 : 0;
  fb.blit(
    sprite,
    _feetX(a.x, a.z, sprite, scale),
    _feetY(a.z, sprite, scale) + bob,
    flipX: a.side == 1,
    shirt: a.side == 0 ? Pal.red : Pal.blue,
    shirtDark: a.side == 0 ? Pal.redDark : Pal.blueDark,
    scale: scale,
  );
}

int _feetX(double x, double z, Sprite sprite, int scale) {
  return project(x, z, 0).x.round() - (sprite.w * scale) ~/ 2;
}

int _feetY(double z, Sprite sprite, int scale) {
  return project(0, z, 0).y.round() - sprite.h * scale;
}

Sprite _pose(Court court, Athlete a) {
  final back = a.side == 0;
  if (a.moving && a.swingT == 0 && ((court.tick ~/ 6) & 1) == 0 && back) {
    return backStep;
  }
  return back ? backReady : frontReady;
}

void _racket(Framebuffer fb, Court court, Athlete a) {
  var place = _racketPlace(a, court.tick);
  if (a.side == 0 && a.swingT == 0 && court.chargeFrames > 0) {
    final pull = (court.chargeFrames * 8 / Court.chargeMax).round();
    place = (place.$1 + pull, place.$2 + 2, place.$3, place.$4);
  }
  final body = _pose(court, a);
  if (a.swingT > 0) {
    final previous = _racketPlace(a, court.tick, a.swingT + 4);
    _blitRacket(fb, a.x, a.z, body, previous.$1, previous.$2, previous.$3, previous.$4);
  }
  _blitRacket(fb, a.x, a.z, body, place.$1, place.$2, place.$3, place.$4);
}

(int, int, bool, Sprite) _racketPlace(Athlete a, int tick, [int? at]) {
  final t = at ?? a.swingT;
  final bob = (tick ~/ 6) % 3 - 1;
  if (a.side == 0) {
    if (t >= 16) return (18, 2, false, racketSide);
    if (t >= 8) return (2, -16, false, racketUp);
    if (t > 0) return (-18, 4, true, racketSide);
    return (16, 8 + bob, false, racketSide);
  }
  if (t >= 16) return (0, 4, true, racketSide);
  if (t >= 8) return (10, 14, false, racketUp);
  if (t > 0) return (18, 8, false, racketSide);
  return (2, 8 + bob, true, racketSide);
}

void _blitRacket(
  Framebuffer fb,
  double x,
  double z,
  Sprite body,
  int dx,
  int dy,
  bool flipX,
  Sprite racket,
) {
  fb.blit(
    racket,
    _feetX(x, z, body, 2) + dx,
    _feetY(z, body, 2) + dy,
    flipX: flipX,
    scale: 2,
  );
}

void _shuttle(Framebuffer fb, Court court) {
  final s = court.shuttle;
  for (final p in court.trail) {
    final at = project(p.$1, p.$2, p.$3);
    fb.pset(at.x.round(), at.y.round(), Pal.trail);
  }
  if (!s.alive) return;
  final at = project(s.x, s.z, s.h);
  final moving = s.vx.abs() + s.vz.abs() + s.vh.abs() > 0.004;
  final index = moving ? (court.tick ~/ 2) & 3 : shuttleFrame(s.vx, s.vz, s.vh);
  final frame = shuttleFrames[index];
  final wobble = moving ? ((court.tick ~/ 2) % 3) - 1 : 0;
  fb.blit(frame, at.x.round() - 8 + wobble, at.y.round() - 8, scale: 2);
}

void _hud(Framebuffer fb, Court court) {
  fb.rect(0, 0, 256, 16, Pal.navy);
  fb.rect(0, 15, 256, 1, Pal.gold);
  final nearColor = court.flashSide == 0 && (court.flashT & 2) == 0 ? Pal.gold : Pal.white;
  final farColor = court.flashSide == 1 && (court.flashT & 2) == 0 ? Pal.gold : Pal.white;
  drawText(fb, '1P', 8, 5, Pal.gold, 1);
  drawText(fb, court.scoreL.toString().padLeft(2, '0'), 28, 4, nearColor, 2);
  final comScore = court.scoreR.toString().padLeft(2, '0');
  final comX = 248 - textWidth(comScore, 2);
  drawText(fb, comScore, comX, 4, farColor, 2);
  drawText(fb, 'COM', comX - 28, 5, Pal.sky, 1);
  if (court.server == 0) {
    fb.rect(58, 6, 3, 3, Pal.white);
  } else {
    fb.rect(comX - 36, 6, 3, 3, Pal.white);
  }
  final status = court.statusLine;
  if (status.isNotEmpty && !court.muted) {
    _center(fb, status, 5, Pal.lime, 1);
  }
  if (court.muted) {
    drawText(fb, 'MUTE', 112, 5, Pal.red, 1);
  }
  _chargeBar(fb, court);
}

void _chargeBar(Framebuffer fb, Court court) {
  if (court.chargeFrames <= 0 || court.phase != Phase.play || court.paused) return;
  const x = 88;
  const y = 226;
  const w = 80;
  fb.rect(x, y, w, 5, Pal.black);
  final fill = (court.chargeFrames * (w - 2) / Court.chargeMax).round();
  final color = court.near.power > 0.85 ? Pal.red : Pal.gold;
  if (fill > 0) fb.rect(x + 1, y + 1, fill, 3, color);
}

void _aimMark(Framebuffer fb, Court court) {
  if (court.chargeFrames <= 0 || court.phase != Phase.play || court.paused) return;
  final serve = court.shuttle.serve && court.shuttle.lastHitter < 0 && court.server == 0;
  final target = shotTarget(
    dir: court.near.dir,
    power: court.near.power,
    aimX: court.near.aimX,
    aimZ: court.near.aimZ,
    serve: serve,
  );
  final p = project(target.$1, target.$2, 0);
  final x = p.x.round();
  final y = p.y.round();
  fb.pset(x, y, Pal.gold);
  fb.pset(x - 2, y, Pal.gold);
  fb.pset(x + 2, y, Pal.gold);
  fb.pset(x, y - 2, Pal.gold);
  fb.pset(x, y + 2, Pal.gold);
}

void _panel(Framebuffer fb, String text) {
  const scale = 2;
  final w = textWidth(text, scale);
  final boxW = w + 20;
  final x = (Framebuffer.width - boxW) ~/ 2;
  const y = 108;
  fb.rect(x, y, boxW, 28, Pal.navy);
  fb.rect(x, y, boxW, 2, Pal.gold);
  fb.rect(x, y + 26, boxW, 2, Pal.gold);
  fb.rect(x, y, 2, 28, Pal.gold);
  fb.rect(x + boxW - 2, y, 2, 28, Pal.gold);
  drawOutlined(fb, text, x + 10, y + 8, Pal.white, scale);
}

void _center(Framebuffer fb, String text, int y, int color, int scale) {
  final x = (Framebuffer.width - textWidth(text, scale)) ~/ 2;
  drawOutlined(fb, text, x, y, color, scale);
}
