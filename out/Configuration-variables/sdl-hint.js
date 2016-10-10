let micro = {
    SDL_HINT_ACCELEROMETER_AS_JOYSTICK: 'SDL_ACCELEROMETER_AS_JOYSTICK',
    SDL_HINT_ANDROID_APK_EXPANSION_MAIN_FILE_VERSION: 'SDL_ANDROID_APK_EXPANSION_MAIN_FILE_VERSION',
    SDL_HINT_ANDROID_APK_EXPANSION_PATCH_FILE_VERSION: 'SDL_ANDROID_APK_EXPANSION_PATCH_FILE_VERSION',
    SDL_HINT_ANDROID_SEPARATE_MOUSE_AND_TOUCH: 'SDL_ANDROID_SEPARATE_MOUSE_AND_TOUCH',
    // SDL_HINT_APPLE_TV_CONTROLLER_UI_EVENTS: ''  --unknow
    // SDL_HINT_APPLE_TV_REMOTE_ALLOW_ROTATION： '' --unknow
    // SDL_HINT_BMP_SAVE_LEGACY_FORMAT '' --unknow
    SDL_HINT_EMSCRIPTEN_KEYBOARD_ELEMENT: 'SDL_EMSCRIPTEN_KEYBOARD_ELEMENT',
    /**
     * A hint that specifies how 3D acceleration is used with SDL_GetWindowSurface().
     * @value 0 disable 3D acceleration
     *        1 enable 3D acceleration, using the default renderer
     *        X enable 3D acceleration, using X where X is one of the valid rendering drivers. (e.g. "direct3d", "opengl", etc.)
     * @default By default SDL tries to make a best guess whether to use acceleration or not on each platform.
     */
    SDL_HINT_FRAMEBUFFER_ACCELERATION: 'SDL_FRAMEBUFFER_ACCELERATION',
    SDL_HINT_GAMECONTROLLERCONFIG: 'SDL_GAMECONTROLLERCONFIG',
    /**
     * A hint that specifies whether grabbing input grabs the keyboard.
     * @value 0 grab will affect only the mouse
     *        1 grab will affect mouse and keyboard
     * @default By default SDL will not grab the keyboard so system shortcuts still work.
     */
    SDL_HINT_GRAB_KEYBOARD: 'SDL_GRAB_KEYBOARD',
    SDL_HINT_IDLE_TIMER_DISABLED: 'SDL_IOS_IDLE_TIMER_DISABLED',
    /**
     *
     */
    SDL_HINT_IME_INTERNAL_EDITING: 'SDL_IME_INTERNAL_EDITING'
};
//# sourceMappingURL=sdl-hint.js.map