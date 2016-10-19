"use strict";
const ffi = require('ffi');
let file = process.platform === 'win32' ? 'SDL2' : 'libSDL2';
function library(funcs, lib) {
    ffi.Library(file, funcs, lib);
}
exports.library = library;
//# sourceMappingURL=ffi.js.map