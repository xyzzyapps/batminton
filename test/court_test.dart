import 'dart:io';
import 'dart:typed_data';

import 'package:batminton/src/court.dart';
import 'package:batminton/src/framebuffer.dart';
import 'package:batminton/src/palette.dart';
import 'package:batminton/src/sprites.dart';
import 'package:batminton/src/view.dart';
import 'package:test/test.dart';

void main() {
  test('sprite sheets use one width', () {
    for (final sprite in [backReady, backStep, backSwing, frontReady, frontSwing]) {
      expect(sprite.w, 16);
      expect(sprite.h, greaterThan(8));
    }
    for (final sprite in shuttleFrames) {
      expect(sprite.w, 8);
      expect(sprite.h, 8);
    }
  });

  test('a serve from the near baseline lands in the service box', () {
    final launch = planLaunch(x: -0.2, z: 0.16, h: 0.12, dir: 1, kind: 'serve');
    final flight = flyShuttle(-0.2, 0.16, 0.12, launch.vx, launch.vz, launch.vh);
    final shuttle = flight.shuttle;
    expect(shuttle.clearedNet, isTrue, reason: 'z ${shuttle.z} h ${shuttle.h}');
    expect(shuttle.hitNet, isFalse);
    expect(shuttle.z, inInclusiveRange(serviceFar, 1));
    expect(shuttle.x.abs(), lessThanOrEqualTo(1));
  });

  test('a low drive hits the net', () {
    final shuttle = Shuttle()
      ..x = 0
      ..z = 0.2
      ..h = 0.08
      ..vz = 0.04
      ..alive = true;
    _land(shuttle);
    expect(shuttle.hitNet, isTrue);
    expect(shuttle.z, lessThan(netZ));
  });

  test('a high clear crosses the net', () {
    final shuttle = Shuttle()
      ..x = 0
      ..z = 0.2
      ..h = 0.4
      ..vz = 0.012
      ..vh = 0.004
      ..alive = true;
    _land(shuttle);
    expect(shuttle.clearedNet, isTrue);
    expect(shuttle.z, greaterThan(netZ));
  });

  test('the match needs a lead of 2 after 10 points', () {
    final court = Court();
    court.scoreL = 11;
    court.scoreR = 10;
    expect(court.winner(), 0);
    court.scoreL = 12;
    expect(court.winner(), 1);
    court.scoreL = 10;
    court.scoreR = 15;
    expect(court.winner(), 2);
  });

  test('a shuttle in the right court scores for the left player', () {
    final court = Court(seed: 3)..phase = Phase.play;
    court.shuttle
      ..alive = true
      ..x = 0
      ..z = 0.8
      ..h = 0.01
      ..vh = -0.02
      ..lastHitter = 0
      ..clearedNet = true
      ..serve = false;
    court.far
      ..x = 0.8
      ..z = 0.9;
    court.update(Controls());
    expect(court.scoreL, 1);
    expect(court.phase, Phase.banner);
    expect(court.banner, 'POINT');
  });

  test('a shuttle past the baseline scores for the receiver', () {
    final court = Court(seed: 3)..phase = Phase.play;
    court.shuttle
      ..alive = true
      ..x = 1.4
      ..z = 0.8
      ..h = 0.01
      ..vh = -0.02
      ..lastHitter = 0
      ..clearedNet = true
      ..serve = false;
    court.update(Controls());
    expect(court.scoreR, 1);
    expect(court.banner, 'OUT');
  });

  test('a missed serve gives the point to the receiver', () {
    final court = Court(seed: 2);
    court.update(Controls()..start = true);
    var guard = 0;
    while (court.phase != Phase.banner && guard++ < 800) {
      court.update(Controls());
    }
    expect(court.scoreR, 1);
    expect(court.banner, 'FAULT');
  });

  test('a long hold is a faster shot than a tap', () {
    final soft = planLaunch(
      x: 0,
      z: 0.2,
      h: 0.12,
      dir: 1,
      kind: 'clear',
      power: 0.22,
    );
    final hard = planLaunch(
      x: 0,
      z: 0.2,
      h: 0.12,
      dir: 1,
      kind: 'clear',
      power: 1,
    );
    expect(hard.vz.abs(), greaterThan(soft.vz.abs()));
    final softLand = flyShuttle(0, 0.2, 0.12, soft.vx, soft.vz, soft.vh);
    final hardLand = flyShuttle(0, 0.2, 0.12, hard.vx, hard.vz, hard.vh);
    expect(softLand.shuttle.hitNet, isFalse);
    expect(hardLand.shuttle.hitNet, isFalse);
    expect(softLand.shuttle.z, greaterThan(0.78));
    expect(softLand.shuttle.z, lessThanOrEqualTo(1));
    expect(hardLand.shuttle.z, greaterThan(0.85));
    expect(hardLand.shuttle.z, lessThanOrEqualTo(1));
    final drop = planLaunch(
      x: 0,
      z: 0.2,
      h: 0.12,
      dir: 1,
      kind: 'clear',
      power: 0.22,
      aimZ: -1,
    );
    final dropLand = flyShuttle(0, 0.2, 0.12, drop.vx, drop.vz, drop.vh);
    expect(dropLand.shuttle.z, lessThan(softLand.shuttle.z - 0.08));
    final fromNet = planLaunch(
      x: 0,
      z: 0.4,
      h: 0.12,
      dir: 1,
      kind: 'drive',
      power: 1,
    );
    final fromNetLand = flyShuttle(0, 0.4, 0.12, fromNet.vx, fromNet.vz, fromNet.vh);
    expect(fromNetLand.shuttle.hitNet, isFalse);
    expect(fromNetLand.shuttle.z, inInclusiveRange(0.8, 1));
    final left = shotTarget(dir: 1, power: 1, aimX: -1, aimZ: 0, serve: false);
    final right = shotTarget(dir: 1, power: 1, aimX: 1, aimZ: 0, serve: false);
    expect(left.$1, lessThan(0));
    expect(right.$1, greaterThan(0));
    final deep = shotTarget(dir: 1, power: 0.5, aimX: 0, aimZ: 1, serve: false);
    final short = shotTarget(dir: 1, power: 0.5, aimX: 0, aimZ: -1, serve: false);
    expect(deep.$2, greaterThan(short.$2));
    final tap = shotWish(Controls(), 1);
    final full = shotWish(Controls()..up = true..right = true, Court.chargeMax);
    expect(tap.power, 0.22);
    expect(full.power, 1);
    expect(full.aimX, 1);
    expect(full.aimZ, 1);
  });

  test('space aims the shot and the player stays still', () {
    final court = Court(seed: 1);
    court.update(Controls()..start = true);
    var guard = 0;
    while (court.phase != Phase.play && guard++ < 80) {
      court.update(Controls());
    }
    expect(court.phase, Phase.play);
    final x0 = court.near.x;
    final z0 = court.near.z;
    final aim = Controls()
      ..charging = true
      ..right = true
      ..up = true;
    for (var i = 0; i < 30; i++) {
      court.update(aim);
    }
    expect(court.near.x, x0);
    expect(court.near.z, z0);
    expect(court.near.aimX, 1);
    expect(court.near.aimZ, 1);
    expect(court.chargeFrames, 30);
    court.update(Controls()
      ..swing = true
      ..right = true
      ..down = true);
    expect(court.near.x, x0);
    expect(court.near.z, z0);
    expect(court.near.aimZ, -1);
  });

  test('a charge shows a power bar and an aim mark', () {
    final court = Court()
      ..phase = Phase.play
      ..chargeFrames = Court.chargeMax;
    court.near
      ..power = 1
      ..aimX = -1
      ..aimZ = 1;
    final fb = Framebuffer();
    render(fb, court);
    expect(fb.px[227 * Framebuffer.width + 90], Pal.red);
    final target = shotTarget(dir: 1, power: 1, aimX: -1, aimZ: 1, serve: false);
    final mark = project(target.$1, target.$2, 0);
    expect(fb.px[mark.y.round() * Framebuffer.width + mark.x.round()], Pal.gold);
  });

  test('the title picture uses the Famicom colors', () {
    final court = Court()..tick = 10;
    final fb = Framebuffer();
    render(fb, court);
    final colors = fb.px.toSet();
    expect(colors.length, greaterThan(6));
    expect(colors.contains(Pal.gold), isTrue);
    expect(colors.contains(Pal.court), isTrue);
    if (Platform.environment['SHOT'] == '1') {
      _writePng(fb, 'title');
      court.update(Controls()..start = true);
      for (var i = 0; i < 80; i++) {
        court.update(Controls());
      }
      render(fb, court);
      _writePng(fb, 'serve');
    }
  });
}

void _land(Shuttle shuttle) {
  var guard = 0;
  while (shuttle.alive && guard++ < 1000) {
    if (stepShuttle(shuttle)) break;
  }
}

void _writePng(Framebuffer fb, String name) {
  final w = Framebuffer.width;
  final h = Framebuffer.height;
  final raw = BytesBuilder();
  for (var y = 0; y < h; y++) {
    raw.addByte(0);
    for (var x = 0; x < w; x++) {
      final color = Pal.rgb[fb.px[y * w + x]];
      raw.addByte((color >> 16) & 255);
      raw.addByte((color >> 8) & 255);
      raw.addByte(color & 255);
    }
  }
  final compressed = ZLibEncoder().convert(raw.toBytes());
  final out = BytesBuilder();
  out.add(const [137, 80, 78, 71, 13, 10, 26, 10]);
  void chunk(String tag, List<int> data) {
    final body = [...tag.codeUnits, ...data];
    out.add(_u32(data.length));
    out.add(body);
    out.add(_u32(_crc(body)));
  }

  chunk('IHDR', [..._u32(w), ..._u32(h), 8, 2, 0, 0, 0]);
  chunk('IDAT', compressed);
  chunk('IEND', const []);
  final dir = Directory(r'C:\Users\manic\AppData\Local\Temp\batminton');
  dir.createSync(recursive: true);
  File('${dir.path}\\$name.png').writeAsBytesSync(out.toBytes());
}

List<int> _u32(int v) => [(v >> 24) & 255, (v >> 16) & 255, (v >> 8) & 255, v & 255];

int _crc(List<int> data) {
  var c = 0xffffffff;
  for (final b in data) {
    c ^= b;
    for (var i = 0; i < 8; i++) {
      final mask = -(c & 1);
      c = (c >> 1) ^ (0xedb88320 & mask);
    }
  }
  return (c ^ 0xffffffff) & 0xffffffff;
}
