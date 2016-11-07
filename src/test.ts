import {error} from './log/console';
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

getDisplayBounds(0);
