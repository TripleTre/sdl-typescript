export enum windowFlags {
  /**
   * @prop fullscreen window
   */
  SDL_WINDOW_FULLSCREEN = 1,

  /**
   * @prop fullscreen window at the current desktop resolution
   */
  SDL_WINDOW_OPENGL = 2,

  /**
   * @prop window is visible
   */
  SDL_WINDOW_SHOWN = 4,

  /**
   * @prop window is not visible
   */
  SDL_WINDOW_HIDDEN = 8,

  /**
   * @prop no window decoration
   */
  SDL_WINDOW_BORDERLESS = 16,

  /**
   * @prop window can be resized
   */
  SDL_WINDOW_RESIZABLE = 32,

  /**
   * @prop window is minimized
   */
  SDL_WINDOW_MINIMIZED = 64,

  /**
   * @prop window is maximized
   */
  SDL_WINDOW_MAXIMIZED = 128,

  /**
   * @prop window has grabbed input focus
   */
  SDL_WINDOW_INPUT_GRABBED = 256,

  /**
   * @prop window has input focus
   */
  SDL_WINDOW_INPUT_FOCUS = 512,

  /**
   * @prop window has mouse focus
   */
  SDL_WINDOW_MOUSE_FOCUS = 1024,

  /**
   * @prop fullscreen window at the current desktop resolution
   */
  SDL_WINDOW_FULLSCREEN_DESKTOP = 4097,

  /**
   * @prop window not created by SDL
   */
  SDL_WINDOW_FOREIGN = 2048,

  /**
   * @prop window should be created in high-DPI mode if supported (>= SDL 2.0.1)
   */
  SDL_WINDOW_ALLOW_HIGHDPI = 8192,

  /**
   * @prop window has mouse captured (unrelated to INPUT_GRABBED, >= SDL 2.0.4)
   */
  SDL_WINDOW_MOUSE_CAPTURE = 16384
}