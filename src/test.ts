import {init, InitOption, wasInit} from './basic/sdl';
import {setError, getError, clearError} from './basic/sdl-error';
import {alloc} from 'ref';
import {GLAttr, createWindow, createWindowAndRenderer, glGetDrawableSize, GLContext_t, glGetCurrentContext, glGetCurrentWindow, getDesktopDisplayMode, getCurrentVideoDriver, getDisplayBounds} from './video/video';
import * as ffi from 'ffi';
import types from './types/types';
import * as ref from 'ref';
import {PixelFormat} from './pixels';
import {enclosePoints, hasIntersection, pointInRect, unionRect} from './rect';

init(InitOption.SDL_INIT_VIDEO);
let window = createWindow('window', 0, 0, 1000, 1000, 0);
console.log(getError());
console.log('getDisplayBounds: ', getDisplayBounds(1));


