import {init, InitOption, wasInit} from './basic/sdl';
import {setError, getError, clearError} from './basic/sdl-error';
import {log, logCritial, LogCategory, logDebug} from './basic/sdl-log';

console.log(Date.now());
for(let i = 1000000; i > 0; i--) {
  init(InitOption.SDL_INIT_VIDEO);
}
console.log(Date.now());