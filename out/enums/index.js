"use strict";
(function (windowEventId) {
    /**
     * @prop (never used)
     */
    windowEventId[windowEventId["SDL_WINDOWEVENT_SHOWNSDL_WINDOWEVENT_NONE"] = 0] = "SDL_WINDOWEVENT_SHOWNSDL_WINDOWEVENT_NONE";
    /**
     * @prop window has been shown
     */
    windowEventId[windowEventId["SDL_WINDOWEVENT_SHOWN"] = 1] = "SDL_WINDOWEVENT_SHOWN";
    /**
     * @prop window has been hidden
     */
    windowEventId[windowEventId["SDL_WINDOWEVENT_HIDDEN"] = 2] = "SDL_WINDOWEVENT_HIDDEN";
    /**
     * @prop window has been exposed and should be redrawn
     */
    windowEventId[windowEventId["SDL_WINDOWEVENT_EXPOSED"] = 3] = "SDL_WINDOWEVENT_EXPOSED";
    /**
     * @prop window has been moved to data1, data2
     */
    windowEventId[windowEventId["SDL_WINDOWEVENT_MOVED"] = 4] = "SDL_WINDOWEVENT_MOVED";
    /**
     * @prop window has been resized to data1xdata2; this is event is always preceded by SDL_WINDOWEVENT_SIZE_CHANGED
     */
    windowEventId[windowEventId["SDL_WINDOWEVENT_RESIZED"] = 5] = "SDL_WINDOWEVENT_RESIZED";
    /**
     * @ prop window size has changed, either as a result of an API call or through the system or user changing the window size;
     *        this event is followed by SDL_WINDOWEVENT_RESIZED if the size was changed by an external event, i.e. the user or the window manager
     */
    windowEventId[windowEventId["SDL_WINDOWEVENT_SIZE_CHANGED"] = 6] = "SDL_WINDOWEVENT_SIZE_CHANGED";
    /**
     * @prop window has been minimized
     */
    windowEventId[windowEventId["SDL_WINDOWEVENT_MINIMIZED"] = 7] = "SDL_WINDOWEVENT_MINIMIZED";
    /**
     * @prop window has been maximized
     */
    windowEventId[windowEventId["SDL_WINDOWEVENT_MAXIMIZED"] = 8] = "SDL_WINDOWEVENT_MAXIMIZED";
    /**
     * @prop window has been restored to normal size and position
     */
    windowEventId[windowEventId["SDL_WINDOWEVENT_RESTORED"] = 9] = "SDL_WINDOWEVENT_RESTORED";
    /**
     * @prop window has gained mouse focus
     */
    windowEventId[windowEventId["SDL_WINDOWEVENT_ENTER"] = 10] = "SDL_WINDOWEVENT_ENTER";
    /**
     * @prop window has lost mouse focus
     */
    windowEventId[windowEventId["SDL_WINDOWEVENT_LEAVE"] = 11] = "SDL_WINDOWEVENT_LEAVE";
    /**
     * @prop window has gained keyboard focus
     */
    windowEventId[windowEventId["SDL_WINDOWEVENT_FOCUS_GAINED"] = 12] = "SDL_WINDOWEVENT_FOCUS_GAINED";
    /**
     * @prop window has lost keyboard focus
     */
    windowEventId[windowEventId["SDL_WINDOWEVENT_FOCUS_LOST"] = 13] = "SDL_WINDOWEVENT_FOCUS_LOST";
    /**
     * @prop the window manager requests that the window be closed
     */
    windowEventId[windowEventId["SDL_WINDOWEVENT_CLOSE"] = 14] = "SDL_WINDOWEVENT_CLOSE";
})(exports.windowEventId || (exports.windowEventId = {}));
var windowEventId = exports.windowEventId;
(function (windowFlags) {
    windowFlags[windowFlags["SDL_WINDOW_FULLSCREEN"] = 1] = "SDL_WINDOW_FULLSCREEN";
    windowFlags[windowFlags["SDL_WINDOW_OPENGL"] = 2] = "SDL_WINDOW_OPENGL";
    windowFlags[windowFlags["SDL_WINDOW_SHOWN"] = 4] = "SDL_WINDOW_SHOWN";
    windowFlags[windowFlags["SDL_WINDOW_HIDDEN"] = 8] = "SDL_WINDOW_HIDDEN";
    windowFlags[windowFlags["SDL_WINDOW_BORDERLESS"] = 16] = "SDL_WINDOW_BORDERLESS";
    windowFlags[windowFlags["SDL_WINDOW_RESIZABLE"] = 32] = "SDL_WINDOW_RESIZABLE";
    windowFlags[windowFlags["SDL_WINDOW_MINIMIZED"] = 64] = "SDL_WINDOW_MINIMIZED";
    windowFlags[windowFlags["SDL_WINDOW_MAXIMIZED"] = 128] = "SDL_WINDOW_MAXIMIZED";
    windowFlags[windowFlags["SDL_WINDOW_INPUT_GRABBED"] = 256] = "SDL_WINDOW_INPUT_GRABBED";
    windowFlags[windowFlags["SDL_WINDOW_INPUT_FOCUS"] = 512] = "SDL_WINDOW_INPUT_FOCUS";
    windowFlags[windowFlags["SDL_WINDOW_MOUSE_FOCUS"] = 1024] = "SDL_WINDOW_MOUSE_FOCUS";
    windowFlags[windowFlags["SDL_WINDOW_FULLSCREEN_DESKTOP"] = 4097] = "SDL_WINDOW_FULLSCREEN_DESKTOP";
    windowFlags[windowFlags["SDL_WINDOW_FOREIGN"] = 2048] = "SDL_WINDOW_FOREIGN";
    windowFlags[windowFlags["SDL_WINDOW_ALLOW_HIGHDPI"] = 8192] = "SDL_WINDOW_ALLOW_HIGHDPI";
    windowFlags[windowFlags["SDL_WINDOW_MOUSE_CAPTURE"] = 16384] = "SDL_WINDOW_MOUSE_CAPTURE";
})(exports.windowFlags || (exports.windowFlags = {}));
var windowFlags = exports.windowFlags;
//# sourceMappingURL=index.js.map