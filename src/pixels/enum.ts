/** Pixel type. */
enum PixiType {
  UNKNOWN  = 0,
  INDEX1   = 1,
  INDEX4   = 2,
  INDEX8   = 3,
  PACKED8  = 4,
  PACKED16 = 5,
  PACKED32 = 6,
  ARRAYU8  = 7,
  ARRAYU16 = 8,
  ARRAYU32 = 9,
  ARRAYF16 = 10,
  ARRAYF32 = 11
}

/** Bitmap pixel order, high bit -> low bit. */
enum BitmapOrder {
  NONE,
  _4321,
  _1234
}

/** Packed component order, high bit -> low bit. */
enum PackedOrder {
  NONE,
  XRGB,
  RGBX,
  ARGB,
  RGBA,
  XBGR,
  BGRX,
  ABGR,
  BGRA
};

enum ArrayOrder {
  NONE,
  RGB,
  RGBA,
  ARGB,
  BGR,
  BGRA,
  ABGR
};

enum PackedLayout {
  NONE,
  _332,
  _4444,
  _1555,
  _5551,
  _565,
  _8888,
  _2101010,
  _1010102
}


function SDL_DEFINE_PIXELFORMAT(type, order, layout, bits, bytes) {
  return ((1 << 28) | ((type) << 24) | ((order) << 20) | ((layout) << 16) |
     ((bits) << 8) | ((bytes) << 0));
}

export let PixelFormat = Object.create(null);
PixelFormat[PixelFormat['UNKNOWN']     = 0]                                                                                         = 'UNKNOWN';
PixelFormat[PixelFormat['INDEX1LSB']   = SDL_DEFINE_PIXELFORMAT(PixiType.INDEX1, BitmapOrder._4321, 0, 1, 0)]                       = 'INDEX1LSB';
PixelFormat[PixelFormat['INDEX1MSB']   = SDL_DEFINE_PIXELFORMAT(PixiType.INDEX1, BitmapOrder._1234, 0, 1, 0)]                       = 'INDEX1MSB';
PixelFormat[PixelFormat['INDEX4LSB']   = SDL_DEFINE_PIXELFORMAT(PixiType.INDEX4, BitmapOrder._4321, 0, 4, 0)]                       = 'INDEX4LSB';
PixelFormat[PixelFormat['INDEX4MSB']   = SDL_DEFINE_PIXELFORMAT(PixiType.INDEX4, BitmapOrder._1234, 0, 4, 0)]                       = 'INDEX4MSB';
PixelFormat[PixelFormat['INDEX8']      = SDL_DEFINE_PIXELFORMAT(PixiType.INDEX8, 0, 0, 8, 1)]                                       = 'INDEX8';
PixelFormat[PixelFormat['RGB332']      = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED8, PackedOrder.XRGB, PackedLayout._332, 8, 1)]       = 'RGB332';
PixelFormat[PixelFormat['RGB444']      = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.XRGB, PackedLayout._4444, 12, 2)]    = 'RGB444';
PixelFormat[PixelFormat['RGB555']      = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.XRGB, PackedLayout._1555, 15, 2)]    = 'RGB555';
PixelFormat[PixelFormat['BGR555']      = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.XBGR, PackedLayout._1555, 15, 2)]    = 'BGR555';
PixelFormat[PixelFormat['ARGB4444']    = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.ARGB, PackedLayout._4444, 16, 2)]    = 'ARGB4444';
PixelFormat[PixelFormat['RGBA4444']    = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.RGBA, PackedLayout._4444, 16, 2)]    = 'RGBA4444';
PixelFormat[PixelFormat['ABGR4444']    = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.ABGR, PackedLayout._4444, 16, 2)]    = 'ABGR4444';
PixelFormat[PixelFormat['BGRA4444']    = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.BGRA, PackedLayout._4444, 16, 2)]    = 'BGRA4444';
PixelFormat[PixelFormat['ARGB1555']    = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.ARGB, PackedLayout._1555, 16, 2)]    = 'ARGB1555';
PixelFormat[PixelFormat['RGBA5551']    = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.RGBA, PackedLayout._5551, 16, 2)]    = 'RGBA5551';
PixelFormat[PixelFormat['ABGR1555']    = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.ABGR, PackedLayout._1555, 16, 2)]    = 'ABGR1555';
PixelFormat[PixelFormat['BGRA5551']    = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.BGRA, PackedLayout._5551, 16, 2)]    = 'BGRA5551';
PixelFormat[PixelFormat['RGB565']      = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.XRGB, PackedLayout._565, 16, 2)]     = 'RGB565';
PixelFormat[PixelFormat['BGR565']      = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.XBGR, PackedLayout._565, 16, 2)]     = 'BGR565';
PixelFormat[PixelFormat['RGB24']       = SDL_DEFINE_PIXELFORMAT(PixiType.ARRAYU8, ArrayOrder.RGB, 0, 24, 3)]                        = 'RGB24';
PixelFormat[PixelFormat['BGR24']       = SDL_DEFINE_PIXELFORMAT(PixiType.ARRAYU8, ArrayOrder.RGB, 0, 24, 3)]                        = 'BGR24';
PixelFormat[PixelFormat['RGB888']      = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.XRGB, PackedLayout._8888, 24, 4)]    = 'RGB888';
PixelFormat[PixelFormat['RGBX8888']    = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.RGBX, PackedLayout._8888, 24, 4)]    = 'RGBX8888';
PixelFormat[PixelFormat['BGR888']      = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.XBGR, PackedLayout._8888, 24, 4)]    = 'BGR888';
PixelFormat[PixelFormat['BGRX8888']    = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.BGRX, PackedLayout._8888, 24, 4)]    = 'BGRX8888';
PixelFormat[PixelFormat['ARGB8888']    = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.ARGB, PackedLayout._8888, 32, 4)]    = 'ARGB8888';
PixelFormat[PixelFormat['RGBA8888']    = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.RGBA, PackedLayout._8888, 32, 4)]    = 'RGBA8888';
PixelFormat[PixelFormat['ABGR8888']    = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.ABGR, PackedLayout._8888, 32, 4)]    = 'ABGR8888';
PixelFormat[PixelFormat['BGRA8888']    = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.BGRA, PackedLayout._8888, 32, 4)]    = 'BGRA8888';
PixelFormat[PixelFormat['ARGB2101010'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.ARGB, PackedLayout._2101010, 32, 4)] = 'ARGB2101010';
// todo SDL_PIXELFORMAT_RGBA32 (>= SDL 2.0.5)
// todo SDL_PIXELFORMAT_ARGB32 (>= SDL 2.0.5)
// todo SDL_PIXELFORMAT_BGRA32 (>= SDL 2.0.5)
// todo SDL_PIXELFORMAT_ABGR32 (>= SDL 2.0.5)
// todo SDL_PIXELFORMAT_YV12
// todo SDL_PIXELFORMAT_IYUV
// todo SDL_PIXELFORMAT_YUY2
// todo SDL_PIXELFORMAT_UYVY
// todo SDL_PIXELFORMAT_YVYU
// todo SDL_PIXELFORMAT_NV12
// todo SDL_PIXELFORMAT_NV21
