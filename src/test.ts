import {init, initOption, wasInit} from './basic/sdl'

console.log('<>', initOption.SDL_INIT_EVERYTHING);
console.log(init(initOption.SDL_INIT_EVERYTHING));
console.log(wasInit(initOption.SDL_INIT_EVERYTHING));
