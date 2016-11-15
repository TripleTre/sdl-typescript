import {error} from './log/console';
import {renderFlags, createRender} from './render/index';
import * as console from 'console';
import {init, InitOption} from './basic/sdl';
import {setError, getError, clearError} from './basic/sdl-error';
import {alloc} from 'ref';
import {GLAttr, createWindow, createWindowAndRenderer, glGetDrawableSize, GLContext_t, glGetCurrentContext, 
        glGetCurrentWindow, getDesktopDisplayMode, getCurrentVideoDriver, getDisplayBounds, getDisplayDPI, getDisplayMode,
        getDisplayName, getGrabbedWindow, getNumDisplayModes, getNumVideoDisplays, getVideoDriver} from './video/video';
import * as ffi from 'ffi';
import types from './types/types';
import * as ref from 'ref';
import {PixelFormat} from './pixels';
import {enclosePoints, hasIntersection, pointInRect, unionRect} from './rect';

init(InitOption.SDL_INIT_VIDEO);
let window = createWindow('test', 100, 100, 600, 400, 0);
let render = createRender(window, -1, renderFlags.accelerated);
// console.log(getDisplayBounds(0));
// console.log(getDisplayDPI(0));
// console.log(getDisplayMode(0, 0));
// console.log(getDisplayName(0));
// console.log(getGrabbedWindow(), window);
// console.log(getNumDisplayModes(0));
// console.log(getNumVideoDisplays());
console.log(getVideoDriver(0));
