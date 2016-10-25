import {init, InitOption, wasInit} from './basic/sdl';
import {setError, getError, clearError} from './basic/sdl-error';
import {log, LogCritical, LogCategory, logDebug, SDL_LogOutputFunction, setOutputFunction, getOutputFunction, getPriority, logMessage, logVerbose} from './basic/sdl-log';
import {assert, getAssertionHandler} from './basic/sdl-assert'
import {alloc} from 'ref';
import {GLAttr, glGetAttribute, glSetAttribute} from './video/video';

init(InitOption.SDL_INIT_EVERYTHING);
console.log(glSetAttribute(GLAttr.alphaSize, 12));
console.log(glGetAttribute(GLAttr.alphaSize));

// log('windowEvent');
// assert(false);
// console.log(getAssertionHandler());
