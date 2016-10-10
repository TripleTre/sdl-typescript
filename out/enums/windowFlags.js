"use strict";
(function (windowFlags) {
    /**
     * @prop fullscreen window
     */
    windowFlags[windowFlags["SDL_WINDOW_FULLSCREEN"] = 1] = "SDL_WINDOW_FULLSCREEN";
    /**
     * @prop fullscreen window at the current desktop resolution
     */
    windowFlags[windowFlags["SDL_WINDOW_OPENGL"] = 2] = "SDL_WINDOW_OPENGL";
    /**
     * @prop window is visible
     */
    windowFlags[windowFlags["SDL_WINDOW_SHOWN"] = 4] = "SDL_WINDOW_SHOWN";
    /**
     * @prop window is not visible
     */
    windowFlags[windowFlags["SDL_WINDOW_HIDDEN"] = 8] = "SDL_WINDOW_HIDDEN";
    /**
     * @prop no window decoration
     */
    windowFlags[windowFlags["SDL_WINDOW_BORDERLESS"] = 16] = "SDL_WINDOW_BORDERLESS";
    /**
     * @prop window can be resized
     */
    windowFlags[windowFlags["SDL_WINDOW_RESIZABLE"] = 32] = "SDL_WINDOW_RESIZABLE";
    /**
     * @prop window is minimized
     */
    windowFlags[windowFlags["SDL_WINDOW_MINIMIZED"] = 64] = "SDL_WINDOW_MINIMIZED";
    /**
     * @prop window is maximized
     */
    windowFlags[windowFlags["SDL_WINDOW_MAXIMIZED"] = 128] = "SDL_WINDOW_MAXIMIZED";
    /**
     * @prop window has grabbed input focus
     */
    windowFlags[windowFlags["SDL_WINDOW_INPUT_GRABBED"] = 256] = "SDL_WINDOW_INPUT_GRABBED";
    /**
     * @prop window has input focus
     */
    windowFlags[windowFlags["SDL_WINDOW_INPUT_FOCUS"] = 512] = "SDL_WINDOW_INPUT_FOCUS";
    /**
     * @prop window has mouse focus
     */
    windowFlags[windowFlags["SDL_WINDOW_MOUSE_FOCUS"] = 1024] = "SDL_WINDOW_MOUSE_FOCUS";
    /**
     * @prop fullscreen window at the current desktop resolution
     */
    windowFlags[windowFlags["SDL_WINDOW_FULLSCREEN_DESKTOP"] = 4097] = "SDL_WINDOW_FULLSCREEN_DESKTOP";
    /**
     * @prop window not created by SDL
     */
    windowFlags[windowFlags["SDL_WINDOW_FOREIGN"] = 2048] = "SDL_WINDOW_FOREIGN";
    /**
     * @prop window should be created in high-DPI mode if supported (>= SDL 2.0.1)
     */
    windowFlags[windowFlags["SDL_WINDOW_ALLOW_HIGHDPI"] = 8192] = "SDL_WINDOW_ALLOW_HIGHDPI";
    /**
     * @prop window has mouse captured (unrelated to INPUT_GRABBED, >= SDL 2.0.4)
     */
    windowFlags[windowFlags["SDL_WINDOW_MOUSE_CAPTURE"] = 16384] = "SDL_WINDOW_MOUSE_CAPTURE";
})(exports.windowFlags || (exports.windowFlags = {}));
var windowFlags = exports.windowFlags;
//# sourceMappingURL=windowFlags.js.map