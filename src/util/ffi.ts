import * as ffi from 'ffi';

declare var process;
let file = process.platform === 'win32' ? 'SDL2' : 'libSDL2';

function library(funcs, lib) {
  ffi.Library(file, funcs, lib);
}

export {library};
