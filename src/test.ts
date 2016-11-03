import {error} from './log/conosle';
import {renderFlags, createRender} from './render/index';
import * as console from 'console';
import {init, InitOption} from './basic/sdl';
import {setError, getError, clearError} from './basic/sdl-error';
import {alloc} from 'ref';
import {GLAttr, createWindow, createWindowAndRenderer, glGetDrawableSize, GLContext_t, glGetCurrentContext, glGetCurrentWindow, getDesktopDisplayMode, getCurrentVideoDriver, getDisplayBounds} from './video/video';
import * as ffi from 'ffi';
import types from './types/types';
import * as ref from 'ref';
import {PixelFormat} from './pixels';
import {enclosePoints, hasIntersection, pointInRect, unionRect} from './rect';


// init(InitOption.SDL_INIT_VIDEO);
// let window = createWindow('window', 0, 0, 100, 100, 0);
// let render = createRender(window, -1, renderFlags.targetTexture);
console.log(getError());
error('redere䷍');
console.log('getDisplayBounds: ', getDisplayBounds(0));
