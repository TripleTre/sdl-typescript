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
//# sourceMappingURL=windowEventId.js.map