import 'palette.dart';

/// A picture of [width] by [height] color indexes.
class Framebuffer {
  static const width = 256;
  static const height = 240;

  final List<int> px = List<int>.filled(width * height, Pal.skyDeep);

  void clear(int color) {
    for (var i = 0; i < px.length; i++) {
      px[i] = color;
    }
  }

  void pset(int x, int y, int color) {
    if (color == Pal.clear) return;
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    px[y * width + x] = color;
  }

  void line(int x0, int y0, int x1, int y1, int color) {
    var dx = (x1 - x0).abs();
    var sx = x0 < x1 ? 1 : -1;
    var dy = (y1 - y0).abs();
    var sy = y0 < y1 ? 1 : -1;
    var err = dx - dy;
    while (true) {
      pset(x0, y0, color);
      if (x0 == x1 && y0 == y1) break;
      final e2 = err * 2;
      if (e2 > -dy) {
        err -= dy;
        x0 += sx;
      }
      if (e2 < dx) {
        err += dx;
        y0 += sy;
      }
    }
  }

  void rect(int x, int y, int w, int h, int color) {
    final y1 = y + h;
    final x1 = x + w;
    for (var yy = y; yy < y1; yy++) {
      if (yy < 0 || yy >= height) continue;
      final row = yy * width;
      final xa = x < 0 ? 0 : x;
      final xb = x1 > width ? width : x1;
      for (var xx = xa; xx < xb; xx++) {
        px[row + xx] = color;
      }
    }
  }

  void blit(
    Sprite sprite,
    int dx,
    int dy, {
    bool flipX = false,
    int shirt = Pal.red,
    int shirtDark = Pal.redDark,
    int scale = 1,
  }) {
    final w = sprite.w;
    final h = sprite.h;
    final src = sprite.px;
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        var c = src[y * w + x];
        if (c == Pal.clear) continue;
        if (c == Pal.red) c = shirt;
        if (c == Pal.redDark) c = shirtDark;
        final sx = dx + (flipX ? w - 1 - x : x) * scale;
        final sy = dy + y * scale;
        rect(sx, sy, scale, scale, c);
      }
    }
  }
}

class Sprite {
  final int w;
  final int h;
  final List<int> px;
  const Sprite(this.w, this.h, this.px);
}

/// 3 by 5 pixel letters. Each glyph is 5 rows of 3 bits.
const Map<String, List<String>> font3x5 = {
  'A': ['111', '101', '111', '101', '101'],
  'B': ['110', '101', '110', '101', '110'],
  'C': ['111', '100', '100', '100', '111'],
  'D': ['110', '101', '101', '101', '110'],
  'E': ['111', '100', '110', '100', '111'],
  'F': ['111', '100', '110', '100', '100'],
  'G': ['111', '100', '101', '101', '111'],
  'H': ['101', '101', '111', '101', '101'],
  'I': ['111', '010', '010', '010', '111'],
  'J': ['001', '001', '001', '101', '111'],
  'K': ['101', '101', '110', '101', '101'],
  'L': ['100', '100', '100', '100', '111'],
  'M': ['101', '111', '101', '101', '101'],
  'N': ['111', '101', '101', '101', '101'],
  'O': ['111', '101', '101', '101', '111'],
  'P': ['111', '101', '111', '100', '100'],
  'Q': ['111', '101', '101', '111', '001'],
  'R': ['110', '101', '110', '101', '101'],
  'S': ['111', '100', '111', '001', '111'],
  'T': ['111', '010', '010', '010', '010'],
  'U': ['101', '101', '101', '101', '111'],
  'V': ['101', '101', '101', '101', '010'],
  'W': ['101', '101', '101', '111', '101'],
  'X': ['101', '101', '010', '101', '101'],
  'Y': ['101', '101', '010', '010', '010'],
  'Z': ['111', '001', '010', '100', '111'],
  '0': ['111', '101', '101', '101', '111'],
  '1': ['010', '110', '010', '010', '111'],
  '2': ['111', '001', '111', '100', '111'],
  '3': ['111', '001', '111', '001', '111'],
  '4': ['101', '101', '111', '001', '001'],
  '5': ['111', '100', '111', '001', '111'],
  '6': ['111', '100', '111', '101', '111'],
  '7': ['111', '001', '010', '010', '010'],
  '8': ['111', '101', '111', '101', '111'],
  '9': ['111', '101', '111', '001', '111'],
  '!': ['010', '010', '010', '000', '010'],
  '?': ['111', '001', '011', '000', '010'],
  '-': ['000', '000', '111', '000', '000'],
  '.': ['000', '000', '000', '000', '010'],
  ' ': ['000', '000', '000', '000', '000'],
};

void drawText(Framebuffer fb, String text, int x, int y, int color, int scale) {
  var cx = x;
  for (final raw in text.split('')) {
    final glyph = font3x5[raw] ?? font3x5[' ']!;
    for (var gy = 0; gy < 5; gy++) {
      for (var gx = 0; gx < 3; gx++) {
        if (glyph[gy][gx] == '1') {
          fb.rect(cx + gx * scale, y + gy * scale, scale, scale, color);
        }
      }
    }
    cx += 4 * scale;
  }
}

int textWidth(String text, int scale) => text.length * 4 * scale;

void drawOutlined(
  Framebuffer fb,
  String text,
  int x,
  int y,
  int fill,
  int scale,
) {
  for (final d in const [(-1, 0), (1, 0), (0, -1), (0, 1)]) {
    drawText(fb, text, x + d.$1, y + d.$2, Pal.black, scale);
  }
  drawText(fb, text, x, y, fill, scale);
}
