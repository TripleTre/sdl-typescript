export enum windowEventId {
  /**
   * @prop (never used)
   */
  SDL_WINDOWEVENT_SHOWNSDL_WINDOWEVENT_NONE,

  /**
   * @prop window has been shown
   */
  SDL_WINDOWEVENT_SHOWN,

  /**
   * @prop window has been hidden
   */
  SDL_WINDOWEVENT_HIDDEN,

  /**
   * @prop window has been exposed and should be redrawn
   */
  SDL_WINDOWEVENT_EXPOSED,

  /**
   * @prop window has been moved to data1, data2
   */
  SDL_WINDOWEVENT_MOVED,

  /**
   * @prop window has been resized to data1xdata2; this is event is always preceded by SDL_WINDOWEVENT_SIZE_CHANGED
   */
  SDL_WINDOWEVENT_RESIZED,

  /**
   * @ prop window size has changed, either as a result of an API call or through the system or user changing the window size; 
   *        this event is followed by SDL_WINDOWEVENT_RESIZED if the size was changed by an external event, i.e. the user or the window manager
   */
  SDL_WINDOWEVENT_SIZE_CHANGED,

  /**
   * @prop window has been minimized
   */
  SDL_WINDOWEVENT_MINIMIZED,

  /**
   * @prop window has been maximized
   */
  SDL_WINDOWEVENT_MAXIMIZED,

  /**
   * @prop window has been restored to normal size and position
   */
  SDL_WINDOWEVENT_RESTORED,

  /**
   * @prop window has gained mouse focus
   */
  SDL_WINDOWEVENT_ENTER,

  /**
   * @prop window has lost mouse focus
   */
  SDL_WINDOWEVENT_LEAVE,

  /**
   * @prop window has gained keyboard focus
   */
  SDL_WINDOWEVENT_FOCUS_GAINED,

  /**
   * @prop window has lost keyboard focus
   */
  SDL_WINDOWEVENT_FOCUS_LOST,

  /**
   * @prop the window manager requests that the window be closed
   */
  SDL_WINDOWEVENT_CLOSE
}
