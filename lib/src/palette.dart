/// Famicom picture colors. Index 0 is empty in a sprite.
class Pal {
  static const clear = 0;
  static const black = 1;
  static const white = 2;
  static const skin = 3;
  static const hair = 4;
  static const red = 5;
  static const redDark = 6;
  static const blue = 7;
  static const blueDark = 8;
  static const cork = 9;
  static const gold = 10;
  static const navy = 11;
  static const sky = 12;
  static const skyDeep = 13;
  static const court = 14;
  static const courtDark = 15;
  static const wood = 16;
  static const woodDark = 17;
  static const shadow = 18;
  static const skinShade = 19;
  static const wall = 20;
  static const wallDark = 21;
  static const window = 22;
  static const trail = 23;
  static const lime = 24;

  static const rgb = <int>[
    0x000000, // 0 clear
    0x181818, // 1 black
    0xFCFCFC, // 2 white
    0xF8B878, // 3 skin
    0x503000, // 4 hair
    0xD82800, // 5 red
    0x881400, // 6 red dark
    0x2038EC, // 7 blue
    0x0000BC, // 8 blue dark
    0xC48400, // 9 cork
    0xF8D878, // 10 gold
    0x001858, // 11 navy
    0x3CBCFC, // 12 sky
    0x0058F8, // 13 sky deep
    0x00A800, // 14 court
    0x007800, // 15 court dark
    0xAC7C00, // 16 wood
    0x783800, // 17 wood dark
    0x005000, // 18 shadow
    0xF89840, // 19 skin shade
    0xBCBCBC, // 20 wall
    0x7C7C7C, // 21 wall dark
    0xA4E4FC, // 22 window
    0xD0F8FC, // 23 trail
    0xB8F818, // 24 lime
  ];
}
