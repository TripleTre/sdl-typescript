import {init, InitOption, wasInit} from './basic/sdl';
import {setError, getError, clearError} from './basic/sdl-error';
import {alloc} from 'ref';
import {GLAttr, createWindow, createWindowAndRenderer, glGetDrawableSize, GLContext_t, glGetCurrentContext, glGetCurrentWindow, getDesktopDisplayMode, getCurrentVideoDriver} from './video/video';
import * as ffi from 'ffi';
import types from './types/types';
import * as ref from 'ref';
import {PixelFormat} from './pixels';
import {enclosePoints} from './rect';

let points = [{
  x: 1,
  y: 10
}, {
  x: 900,
  y: 776
}]
enclosePoints(points);

