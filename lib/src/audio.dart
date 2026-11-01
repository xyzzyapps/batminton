import 'package:web/web.dart';

/// Square-wave sounds in the style of a Famicom game.
class Chiptune {
  AudioContext? _ctx;
  double _next = 0;
  int _step = 0;
  bool music = false;

  void arm() {
    _ctx ??= AudioContext();
    _ctx!.resume();
  }

  void sfx(String event, {required bool muted}) {
    if (muted) return;
    final ctx = _ctx;
    if (ctx == null) return;
    switch (event) {
      case 'swing':
        _tone(ctx, 180, 0.05, 0.04, slide: 0.6);
      case 'hit':
        _tone(ctx, 740, 0.07, 0.08, slide: 0.45);
      case 'drop':
        _tone(ctx, 420, 0.08, 0.07, slide: 0.7);
      case 'smash':
        _tone(ctx, 160, 0.12, 0.1, slide: 0.35);
        _tone(ctx, 880, 0.06, 0.06, slide: 0.4);
      case 'jump':
        _tone(ctx, 300, 0.05, 0.03, slide: 1.8);
      case 'point':
        _tone(ctx, 523, 0.1, 0.08);
        _tone(ctx, 659, 0.1, 0.08, when: 0.09);
        _tone(ctx, 784, 0.16, 0.08, when: 0.18);
      case 'fault':
      case 'let':
        _tone(ctx, 196, 0.14, 0.07, slide: 0.5);
      case 'win':
        _tone(ctx, 523, 0.12, 0.09);
        _tone(ctx, 659, 0.12, 0.09, when: 0.12);
        _tone(ctx, 784, 0.12, 0.09, when: 0.24);
        _tone(ctx, 1046, 0.28, 0.09, when: 0.36);
      case 'lose':
        _tone(ctx, 392, 0.16, 0.08);
        _tone(ctx, 330, 0.16, 0.08, when: 0.16);
        _tone(ctx, 262, 0.28, 0.08, when: 0.32);
      case 'start':
        _tone(ctx, 880, 0.08, 0.06);
      default:
        break;
    }
  }

  void tick({required bool playMusic, required bool muted}) {
    final ctx = _ctx;
    if (ctx == null) return;
    music = playMusic && !muted;
    if (!music) return;
    final now = ctx.currentTime;
    if (now + 0.02 < _next) return;
    const notes = <double>[
      523, 659, 784, 659, 587, 523, 440, 523,
      392, 523, 659, 523, 494, 440, 392, 440,
    ];
    final freq = notes[_step % notes.length];
    _tone(ctx, freq, 0.16, 0.035);
    _tone(ctx, freq / 2, 0.16, 0.02, type: 'triangle');
    _step++;
    _next = now + 0.18;
  }

  void _tone(
    AudioContext ctx,
    double freq,
    double dur,
    double vol, {
    double slide = 1,
    double when = 0,
    String type = 'square',
  }) {
    final t = ctx.currentTime + when;
    final osc = ctx.createOscillator();
    final gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (slide != 1) {
      final end = freq * slide;
      osc.frequency.exponentialRampToValueAtTime(end < 40 ? 40 : end, t + dur);
    }
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  }
}
