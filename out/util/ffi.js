"use strict";
const ffi_1 = require('ffi');
let file = process.platform === 'win32' ? 'SDL2' : 'libSDL2';
function library(funcs, lib) {
    ffi_1.default.Library(file, funcs, lib);
}
exports.library = library;
//# sourceMappingURL=ffi.js.map