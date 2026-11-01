import 'dart:js_interop';
import 'dart:typed_data';

import 'package:web/web.dart';

import 'src/audio.dart';
import 'src/court.dart';
import 'src/framebuffer.dart';
import 'src/palette.dart';
import 'src/view.dart';

final Court court = Court(seed: DateTime.now().millisecondsSinceEpoch);
final Framebuffer frame = Framebuffer();
final Chiptune audio = Chiptune();
final Controls controls = Controls();
final Uint8List rgba = Uint8List(Framebuffer.width * Framebuffer.height * 4);
final Set<String> held = <String>{};

@JS('blitFrame')
external void blitFrame(JSUint8Array bytes, int w, int h, int ox, int oy);

void main() {
  court.onSfx = (event) => audio.sfx(event, muted: court.muted);
  window.addEventListener('keydown', _onKeyDown.toJS);
  window.addEventListener('keyup', _onKeyUp.toJS);
  final pad = document.querySelectorAll('#pad button');
  for (var i = 0; i < pad.length; i++) {
    final button = pad.item(i) as HTMLButtonElement;
    final code = button.getAttribute('data-code') ?? '';
    button.addEventListener('pointerdown', ((Event event) {
      event.preventDefault();
      audio.arm();
      _press(code, true);
    }).toJS);
    button.addEventListener('pointerup', ((Event event) {
      _press(code, false);
    }).toJS);
    button.addEventListener('pointerleave', ((Event event) {
      _press(code, false);
    }).toJS);
  }
  window.requestAnimationFrame(_onFrame.toJS);
}

void _onKeyDown(Event event) {
  final key = event as KeyboardEvent;
  if (_isGameKey(key.code)) key.preventDefault();
  if (key.repeat) return;
  audio.arm();
  _press(key.code, true);
}

void _onKeyUp(Event event) {
  final key = event as KeyboardEvent;
  if (_isGameKey(key.code)) key.preventDefault();
  _press(key.code, false);
}

bool _isGameKey(String code) {
  return code.startsWith('Arrow') ||
      code == 'Space' ||
      code == 'Enter' ||
      code == 'KeyA' ||
      code == 'KeyD' ||
      code == 'KeyW' ||
      code == 'KeyS' ||
      code == 'KeyZ' ||
      code == 'KeyX' ||
      code == 'KeyM' ||
      code == 'KeyP';
}

void _press(String code, bool down) {
  if (code.isEmpty) return;
  if (down) {
    if (!held.add(code)) return;
    if (code == 'Enter' || code == 'KeyP') controls.start = true;
    if (code == 'KeyM') controls.mute = true;
  } else {
    held.remove(code);
  }
  final swingHeld =
      held.contains('Space') || held.contains('KeyZ') || held.contains('KeyX');
  if (controls.charging && !swingHeld) controls.swing = true;
  controls.charging = swingHeld;
  controls.left = held.contains('ArrowLeft') || held.contains('KeyA');
  controls.right = held.contains('ArrowRight') || held.contains('KeyD');
  controls.up = held.contains('ArrowUp') || held.contains('KeyW');
  controls.down = held.contains('ArrowDown') || held.contains('KeyS');
}

double _last = 0;
double _acc = 0;

void _onFrame(JSNumber time) {
  final now = time.toDartDouble;
  var dt = _last == 0 ? 16.7 : now - _last;
  _last = now;
  if (dt > 80) dt = 80;
  if (dt < 0) dt = 0;
  _acc += dt;
  var steps = 0;
  while (_acc >= 16.666 && steps < 5) {
    court.update(controls);
    controls.clearEdges();
    _acc -= 16.666;
    steps++;
  }
  render(frame, court);
  _present(court.shake);
  final music = court.phase == Phase.title || court.phase == Phase.gameOver;
  audio.tick(playMusic: music, muted: court.muted);
  window.requestAnimationFrame(_onFrame.toJS);
}

void _present(int shake) {
  final px = frame.px;
  final pal = Pal.rgb;
  for (var i = 0, p = 0; i < px.length; i++, p += 4) {
    final color = pal[px[i]];
    rgba[p] = (color >> 16) & 255;
    rgba[p + 1] = (color >> 8) & 255;
    rgba[p + 2] = color & 255;
    rgba[p + 3] = 255;
  }
  final ox = shake > 0 ? (shake.isEven ? 1 : -1) : 0;
  blitFrame(rgba.toJS, Framebuffer.width, Framebuffer.height, ox, 0);
}
