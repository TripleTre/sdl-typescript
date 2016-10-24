import {init, InitOption, wasInit} from './basic/sdl';
import {setError, getError, clearError} from './basic/sdl-error';
import {log, logCritial, LogCategory, logDebug, SDL_LogOutputFunction, setOutputFunction, getOutputFunction, getPriority} from './basic/sdl-log';
import {alloc} from 'ref';

console.log(getPriority(0));
console.log(getPriority(1));
console.log(getPriority(2));
console.log(getPriority(3));
console.log(getPriority(4));
console.log(getPriority(5));
console.log(getPriority(6));
console.log(getPriority(7));
console.log(getPriority(8));
console.log(getPriority(9));
console.log(getPriority(10));
console.log(getPriority(11));
console.log(getPriority(12));
console.log(getPriority(13));
