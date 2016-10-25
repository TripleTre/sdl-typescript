"use strict";
const ffi_1 = require('../util/ffi');
const types_1 = require('../types/types');
const ref = require('ref');
const sdl_error_1 = require('../basic/sdl-error');
let lib = Object.create(null);
ffi_1.library({
    SDL_GL_GetAttribute: [types_1.default.int, [types_1.default.uint32, types_1.default.int_p]],
    SDL_GL_SetAttribute: [types_1.default.int, [types_1.default.uint32, types_1.default.int]]
}, lib);
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
//# sourceMappingURL=video.js.map