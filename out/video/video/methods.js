"use strict";
const ffi_1 = require('../../util/ffi');
const types_1 = require('../../types/types');
const ref = require('ref');
const sdl_error_1 = require('../../basic/sdl-error');
const buffer_util_1 = require('../../util/buffer-util');
let lib = Object.create(null);
ffi_1.library({
    SDL_CreateWindow: [types_1.default.void_p, [types_1.default.CString, types_1.default.int, types_1.default.int, types_1.default.int, types_1.default.int, types_1.default.uint32]],
    SDL_CreateWindowAndRenderer: [types_1.default.int, [types_1.default.int, types_1.default.int, types_1.default.uint32, types_1.default.void_p, types_1.default.void_p]],
    SDL_CreateWindowFrom: [types_1.default.void_p, [types_1.default.void_p]],
    SDL_DestroyWindow: [types_1.default.void, [types_1.default.void_p]],
    SDL_DisableScreenSaver: [types_1.default.void, []],
    SDL_EnableScreenSaver: [types_1.default.void, []],
    SDL_GL_CreateContext: [types_1.default.void_p, [types_1.default.void_p]],
    SDL_GL_DeleteContext: [types_1.default.void, [types_1.default.void_p]],
    SDL_GL_ExtensionSupported: [types_1.default.uint8, [types_1.default.CString]],
    SDL_GL_GetAttribute: [types_1.default.int, [types_1.default.uint32, types_1.default.int_p]],
    SDL_GL_GetCurrentContext: [types_1.default.void_p, []],
    SDL_GL_GetCurrentWindow: [types_1.default.void_p, []],
    SDL_GL_GetDrawableSize: [types_1.default.void, [types_1.default.void_p, types_1.default.int_p, types_1.default.int_p]],
    SDL_GL_GetProcAddress: [types_1.default.void_p, [types_1.default.CString]],
    SDL_GL_SetAttribute: [types_1.default.int, [types_1.default.uint32, types_1.default.int]]
}, lib);
function createWindow(title, x, y, w, h, flags) {
    let ret = lib.SDL_CreateWindow(title, x, y, w, h, flags);
    if (ret == null) {
        throw new Error('create window failed, ' + sdl_error_1.getError());
    }
    return ret;
}
exports.createWindow = createWindow;
/**
 *
 */
function createWindowAndRenderer(w, h, flags) {
    let window = ref.alloc(types_1.default.void_p);
    let renderer = ref.alloc(types_1.default.void_p);
    let ret = lib.SDL_CreateWindowAndRenderer(w, h, flags, window, renderer);
    if (ret < 0) {
        throw new Error('create window failed, ' + sdl_error_1.getError());
    }
    return {
        window,
        renderer
    };
}
exports.createWindowAndRenderer = createWindowAndRenderer;
function createWindowFrom() {
    //
}
exports.createWindowFrom = createWindowFrom;
function destroyWindow(window) {
    lib.SDL_DestroyWindow(window);
}
exports.destroyWindow = destroyWindow;
/**
 * 禁用屏幕保护程序，在 SDL 退出后会重新启用。
 */
function disableScreenSaver() {
    lib.SDL_DisableScreenSaver();
}
exports.disableScreenSaver = disableScreenSaver;
function enableScreenSaver() {
    lib.SDL_EnableScreenSaver();
}
exports.enableScreenSaver = enableScreenSaver;
/**
 * 为当前窗口创建 openGL 上下文， 以使用 openGL 绘图
 */
function glCreateContext(window) {
    return lib.SDL_GL_CreateContext(window);
}
exports.glCreateContext = glCreateContext;
function glDeleteContext(context) {
    lib.SDL_GL_DeleteContext(context);
}
exports.glDeleteContext = glDeleteContext;
function glExtensionSupported(extension) {
    return !!lib.SDL_GL_ExtensionSupported(extension);
}
exports.glExtensionSupported = glExtensionSupported;
/**
 * 获取当前活跃的 openGL context。
 * @return 调用成功时返回openGL context， 否则返回 null。 调用 getError 获取错误信息
 */
function glGetCurrentContext() {
    let ret = lib.SDL_GL_GetCurrentContext();
    return buffer_util_1.nullOrSelf(ret);
}
exports.glGetCurrentContext = glGetCurrentContext;
function glGetCurrentWindow() {
    let ret = lib.SDL_GL_GetCurrentWindow();
    return buffer_util_1.nullOrSelf(ret);
}
exports.glGetCurrentWindow = glGetCurrentWindow;
// todo 这个函数与 SDL_GetWindowSize 在高分屏上有什么区别
/**
 * 获取窗口的可绘制区域大小，单位像素。
 * @return {w: number, h: number}
 */
function glGetDrawableSize(window) {
    let w = ref.alloc('int', 0);
    let h = ref.alloc('int', 0);
    lib.SDL_GL_GetDrawableSize(window, w, h);
    return {
        w: ref.deref(w),
        h: ref.deref(h)
    };
}
exports.glGetDrawableSize = glGetDrawableSize;
/**
 * 根据名字获取 openGL 函数。
 * @param {creator} ffi.Function 生成的对象， 用来生成 js 函数。
 * @param {func} 要获取的 openGL 函数名称
 * @return 转换后的 js 函数。
 */
function glGetProcAddress(creator, func) {
    return creator.toFunction(lib.SDL_GL_GetProcAddress(func));
}
exports.glGetProcAddress = glGetProcAddress;
/**
 * 获取当前 gl 上下文中指定属性的实际值。
 * @param {attr} 要查询的 GLAttr 属性。
 * @return 要查询属性的值。
 */
function glGetAttribute(attr) {
    // todo 是否必须用这种形式传指针
    let ret = ref.alloc('int');
    let res = lib.SDL_GL_GetAttribute(attr, ret);
    if (res < 0) {
        throw new Error('get gl attribute failed, ' + sdl_error_1.getError());
    }
    return ref.deref(ret);
}
exports.glGetAttribute = glGetAttribute;
/**
 * 设置 OpenGL 窗口的属性， 必须在创建窗口之前调用。
 * @param {attr} 要设置的属性。
 * @param {value} 要设置的属性值。
 *
 */
function glSetAttribute(attr, value) {
    let res = lib.SDL_GL_SetAttribute(attr, value);
    if (res < 0) {
        throw new Error('set gl attribute failed, ' + sdl_error_1.getError());
    }
    return res;
}
exports.glSetAttribute = glSetAttribute;
//# sourceMappingURL=methods.js.map