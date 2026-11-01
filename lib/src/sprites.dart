import 'framebuffer.dart';
import 'palette.dart';

// . empty  o outline  s skin  h hair  r shirt  d shirt dark
// w white  k racket wood
const _ink = {
  '.': Pal.clear,
  'o': Pal.black,
  's': Pal.skin,
  'h': Pal.hair,
  'r': Pal.red,
  'd': Pal.redDark,
  'w': Pal.white,
  'k': Pal.cork,
};

Sprite _sprite(List<String> rows) {
  final w = rows.first.length;
  for (final row in rows) {
    if (row.length != w) {
      throw StateError('row length ${row.length} != $w [$row]');
    }
  }
  final px = List<int>.filled(w * rows.length, 0);
  for (var y = 0; y < rows.length; y++) {
    final row = rows[y];
    for (var x = 0; x < w; x++) {
      final ink = _ink[row[x]];
      if (ink == null) throw StateError('bad pixel "${row[x]}"');
      px[y * w + x] = ink;
    }
  }
  return Sprite(w, rows.length, px);
}

/// Player seen from behind. This is the near player at the bottom.
final Sprite backReady = _sprite(const [
  '....hhhh........',
  '...ohhhho.......',
  '...osssso.......',
  '....oooo........',
  '..oorrrroo......',
  '.odrrrrrrdo.....',
  '.odrrrrrrdo.....',
  '..owwwwwwo......',
  '..owwwwwwo......',
  '..oo....oo......',
  '.ow......wo.....',
  '.oo......oo.....',
]);

final Sprite backStep = _sprite(const [
  '....hhhh........',
  '...ohhhho.......',
  '...osssso.......',
  '....oooo........',
  '..oorrrroo......',
  '.odrrrrrrdo.....',
  '.odrrrrrrdo.....',
  '..owwwwwwo......',
  '..oww..wwo......',
  '..oo..oo........',
  '.ow....wo.......',
  '.oo....oo.......',
]);

final Sprite backSwing = _sprite(const [
  '....hhhh........',
  '...ohhhho.......',
  '...osssso.......',
  '....oooo........',
  '..oorrrroo......',
  '.odrrrrrrdo.....',
  '.odrrrrrrdokko..',
  '..owwwwwwo.k.k..',
  '..owwwwwwo.k.k..',
  '..oo....oo.ok...',
  '.ow......wo.....',
  '.oo......oo.....',
]);

/// Player seen from the front. This is the far player at the top.
final Sprite frontReady = _sprite(const [
  '....hhhh........',
  '...ohhhho.......',
  '...osooso.......',
  '...osssso.......',
  '....oooo........',
  '..oorrrroo......',
  '.odrrrrrrdo.....',
  '..owwwwwwo......',
  '..owwwwwwo......',
  '..oo....oo......',
  '.ow......wo.....',
  '.oo......oo.....',
]);

final Sprite frontSwing = _sprite(const [
  '....hhhh........',
  '...ohhhho.......',
  '...osooso.......',
  '...osssso.......',
  '....oooo........',
  '..oorrrroo......',
  '.odrrrrrrdokko..',
  '..owwwwwwo.k.k..',
  '..owwwwwwo.k.k..',
  '..oo....oo.ok...',
  '.ow......wo.....',
  '.oo......oo.....',
]);

final List<Sprite> shuttleFrames = [
  _sprite(const [
    '.wwww...',
    'wwwwwwo.',
    '.wwwooko',
    '..ww.oko',
    '...w.oo.',
    '.....o..',
    '........',
    '........',
  ]),
  _sprite(const [
    '..ww....',
    '.wwww...',
    'wwwwww..',
    '.wwww...',
    '..oo....',
    '..oko...',
    '..oko...',
    '..oo....',
  ]),
  _sprite(const [
    '...wwww.',
    '.owwwww.',
    'okoooww.',
    'oko.ww..',
    '.oo.w...',
    '..o.....',
    '........',
    '........',
  ]),
  _sprite(const [
    '..oo....',
    '..oko...',
    '..oko...',
    '..oo....',
    '.wwww...',
    'wwwwww..',
    '.wwww...',
    '..ww....',
  ]),
];

/// The racket head. The handle points down.
final Sprite racketUp = _sprite(const [
  '.okko.',
  'ok..ko',
  'ok..ko',
  '.okko.',
  '..kk..',
  '..kk..',
  '...k..',
]);

/// The racket head. The handle points left.
final Sprite racketSide = _sprite(const [
  '......',
  '.okko.',
  'ok..ko',
  '.okko.',
  'kk....',
  'k.....',
  '......',
]);

int shuttleFrame(double vx, double vz, double vh) {
  if (vh.abs() > vx.abs() && vh.abs() > vz.abs()) {
    return vh >= 0 ? 3 : 1;
  }
  return vx >= 0 ? 0 : 2;
}
