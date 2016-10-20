"use strict";
const ffi_1 = require('../util/ffi');
const types_1 = require('../types/types');
let lib = Object.create(null);
ffi_1.library({
    SDL_ClearError: [types_1.default.void, []],
    SDL_GetError: [types_1.default.CString, []],
    SDL_SetError: [types_1.default.int, [types_1.default.CString]]
}, lib);
/**
 * 清除上一个错误的信息，只清除信息错误还在队列中，调用这个函数后再 getError 返回的不是前一个错误的信息， 而是
 * 空字符串。
 */
function clearError() {
    return lib.SDL_ClearError();
}
exports.clearError = clearError;
/**
 * 返回上一个错误的相关信息。在调用该方法前可能发生了多个错误，但是只返回最后一个错误的信息。
 * @return 错误相关信息，或空字符串
 */
function getError() {
    return lib.SDL_GetError();
}
exports.getError = getError;
/**
 * 设置 SDL 错误信息。
 * @return 始终返回 -1
 */
function setError(message) {
    message = '' + message;
    return lib.SDL_SetError(message);
}
exports.setError = setError;
//# sourceMappingURL=sdl-error.js.map