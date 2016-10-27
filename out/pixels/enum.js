"use strict";
/** Pixel type. */
var PixiType;
(function (PixiType) {
    PixiType[PixiType["UNKNOWN"] = 0] = "UNKNOWN";
    PixiType[PixiType["INDEX1"] = 1] = "INDEX1";
    PixiType[PixiType["INDEX4"] = 2] = "INDEX4";
    PixiType[PixiType["INDEX8"] = 3] = "INDEX8";
    PixiType[PixiType["PACKED8"] = 4] = "PACKED8";
    PixiType[PixiType["PACKED16"] = 5] = "PACKED16";
    PixiType[PixiType["PACKED32"] = 6] = "PACKED32";
    PixiType[PixiType["ARRAYU8"] = 7] = "ARRAYU8";
    PixiType[PixiType["ARRAYU16"] = 8] = "ARRAYU16";
    PixiType[PixiType["ARRAYU32"] = 9] = "ARRAYU32";
    PixiType[PixiType["ARRAYF16"] = 10] = "ARRAYF16";
    PixiType[PixiType["ARRAYF32"] = 11] = "ARRAYF32";
})(PixiType || (PixiType = {}));
/** Bitmap pixel order, high bit -> low bit. */
var BitmapOrder;
(function (BitmapOrder) {
    BitmapOrder[BitmapOrder["NONE"] = 0] = "NONE";
    BitmapOrder[BitmapOrder["_4321"] = 1] = "_4321";
    BitmapOrder[BitmapOrder["_1234"] = 2] = "_1234";
})(BitmapOrder || (BitmapOrder = {}));
/** Packed component order, high bit -> low bit. */
var PackedOrder;
(function (PackedOrder) {
    PackedOrder[PackedOrder["NONE"] = 0] = "NONE";
    PackedOrder[PackedOrder["XRGB"] = 1] = "XRGB";
    PackedOrder[PackedOrder["RGBX"] = 2] = "RGBX";
    PackedOrder[PackedOrder["ARGB"] = 3] = "ARGB";
    PackedOrder[PackedOrder["RGBA"] = 4] = "RGBA";
    PackedOrder[PackedOrder["XBGR"] = 5] = "XBGR";
    PackedOrder[PackedOrder["BGRX"] = 6] = "BGRX";
    PackedOrder[PackedOrder["ABGR"] = 7] = "ABGR";
    PackedOrder[PackedOrder["BGRA"] = 8] = "BGRA";
})(PackedOrder || (PackedOrder = {}));
;
var ArrayOrder;
(function (ArrayOrder) {
    ArrayOrder[ArrayOrder["NONE"] = 0] = "NONE";
    ArrayOrder[ArrayOrder["RGB"] = 1] = "RGB";
    ArrayOrder[ArrayOrder["RGBA"] = 2] = "RGBA";
    ArrayOrder[ArrayOrder["ARGB"] = 3] = "ARGB";
    ArrayOrder[ArrayOrder["BGR"] = 4] = "BGR";
    ArrayOrder[ArrayOrder["BGRA"] = 5] = "BGRA";
    ArrayOrder[ArrayOrder["ABGR"] = 6] = "ABGR";
})(ArrayOrder || (ArrayOrder = {}));
;
var PackedLayout;
(function (PackedLayout) {
    PackedLayout[PackedLayout["NONE"] = 0] = "NONE";
    PackedLayout[PackedLayout["_332"] = 1] = "_332";
    PackedLayout[PackedLayout["_4444"] = 2] = "_4444";
    PackedLayout[PackedLayout["_1555"] = 3] = "_1555";
    PackedLayout[PackedLayout["_5551"] = 4] = "_5551";
    PackedLayout[PackedLayout["_565"] = 5] = "_565";
    PackedLayout[PackedLayout["_8888"] = 6] = "_8888";
    PackedLayout[PackedLayout["_2101010"] = 7] = "_2101010";
    PackedLayout[PackedLayout["_1010102"] = 8] = "_1010102";
})(PackedLayout || (PackedLayout = {}));
function SDL_DEFINE_PIXELFORMAT(type, order, layout, bits, bytes) {
    return ((1 << 28) | ((type) << 24) | ((order) << 20) | ((layout) << 16) |
        ((bits) << 8) | ((bytes) << 0));
}
exports.PixelFormat = Object.create(null);
exports.PixelFormat[exports.PixelFormat['UNKNOWN'] = 0] = 'UNKNOWN';
exports.PixelFormat[exports.PixelFormat['INDEX1LSB'] = SDL_DEFINE_PIXELFORMAT(PixiType.INDEX1, BitmapOrder._4321, 0, 1, 0)] = 'INDEX1LSB';
exports.PixelFormat[exports.PixelFormat['INDEX1MSB'] = SDL_DEFINE_PIXELFORMAT(PixiType.INDEX1, BitmapOrder._1234, 0, 1, 0)] = 'INDEX1MSB';
exports.PixelFormat[exports.PixelFormat['INDEX4LSB'] = SDL_DEFINE_PIXELFORMAT(PixiType.INDEX4, BitmapOrder._4321, 0, 4, 0)] = 'INDEX4LSB';
exports.PixelFormat[exports.PixelFormat['INDEX4MSB'] = SDL_DEFINE_PIXELFORMAT(PixiType.INDEX4, BitmapOrder._1234, 0, 4, 0)] = 'INDEX4MSB';
exports.PixelFormat[exports.PixelFormat['INDEX8'] = SDL_DEFINE_PIXELFORMAT(PixiType.INDEX8, 0, 0, 8, 1)] = 'INDEX8';
exports.PixelFormat[exports.PixelFormat['RGB332'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED8, PackedOrder.XRGB, PackedLayout._332, 8, 1)] = 'RGB332';
exports.PixelFormat[exports.PixelFormat['RGB444'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.XRGB, PackedLayout._4444, 12, 2)] = 'RGB444';
exports.PixelFormat[exports.PixelFormat['RGB555'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.XRGB, PackedLayout._1555, 15, 2)] = 'RGB555';
exports.PixelFormat[exports.PixelFormat['BGR555'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.XBGR, PackedLayout._1555, 15, 2)] = 'BGR555';
exports.PixelFormat[exports.PixelFormat['ARGB4444'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.ARGB, PackedLayout._4444, 16, 2)] = 'ARGB4444';
exports.PixelFormat[exports.PixelFormat['RGBA4444'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.RGBA, PackedLayout._4444, 16, 2)] = 'RGBA4444';
exports.PixelFormat[exports.PixelFormat['ABGR4444'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.ABGR, PackedLayout._4444, 16, 2)] = 'ABGR4444';
exports.PixelFormat[exports.PixelFormat['BGRA4444'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.BGRA, PackedLayout._4444, 16, 2)] = 'BGRA4444';
exports.PixelFormat[exports.PixelFormat['ARGB1555'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.ARGB, PackedLayout._1555, 16, 2)] = 'ARGB1555';
exports.PixelFormat[exports.PixelFormat['RGBA5551'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.RGBA, PackedLayout._5551, 16, 2)] = 'RGBA5551';
exports.PixelFormat[exports.PixelFormat['ABGR1555'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.ABGR, PackedLayout._1555, 16, 2)] = 'ABGR1555';
exports.PixelFormat[exports.PixelFormat['BGRA5551'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.BGRA, PackedLayout._5551, 16, 2)] = 'BGRA5551';
exports.PixelFormat[exports.PixelFormat['RGB565'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.XRGB, PackedLayout._565, 16, 2)] = 'RGB565';
exports.PixelFormat[exports.PixelFormat['BGR565'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED16, PackedOrder.XBGR, PackedLayout._565, 16, 2)] = 'BGR565';
exports.PixelFormat[exports.PixelFormat['RGB24'] = SDL_DEFINE_PIXELFORMAT(PixiType.ARRAYU8, ArrayOrder.RGB, 0, 24, 3)] = 'RGB24';
exports.PixelFormat[exports.PixelFormat['BGR24'] = SDL_DEFINE_PIXELFORMAT(PixiType.ARRAYU8, ArrayOrder.RGB, 0, 24, 3)] = 'BGR24';
exports.PixelFormat[exports.PixelFormat['RGB888'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.XRGB, PackedLayout._8888, 24, 4)] = 'RGB888';
exports.PixelFormat[exports.PixelFormat['RGBX8888'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.RGBX, PackedLayout._8888, 24, 4)] = 'RGBX8888';
exports.PixelFormat[exports.PixelFormat['BGR888'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.XBGR, PackedLayout._8888, 24, 4)] = 'BGR888';
exports.PixelFormat[exports.PixelFormat['BGRX8888'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.BGRX, PackedLayout._8888, 24, 4)] = 'BGRX8888';
exports.PixelFormat[exports.PixelFormat['ARGB8888'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.ARGB, PackedLayout._8888, 32, 4)] = 'ARGB8888';
exports.PixelFormat[exports.PixelFormat['RGBA8888'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.RGBA, PackedLayout._8888, 32, 4)] = 'RGBA8888';
exports.PixelFormat[exports.PixelFormat['ABGR8888'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.ABGR, PackedLayout._8888, 32, 4)] = 'ABGR8888';
exports.PixelFormat[exports.PixelFormat['BGRA8888'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.BGRA, PackedLayout._8888, 32, 4)] = 'BGRA8888';
exports.PixelFormat[exports.PixelFormat['ARGB2101010'] = SDL_DEFINE_PIXELFORMAT(PixiType.PACKED32, PackedOrder.ARGB, PackedLayout._2101010, 32, 4)] = 'ARGB2101010';
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
//# sourceMappingURL=enum.js.map