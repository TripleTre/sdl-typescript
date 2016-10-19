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
    SDL_HINT_IME_INTERNAL_EDITING: 'SDL_IME_INTERNAL_EDITING',
    /**
     * A hint that specifies if joystick (and gamecontroller) events are enabled even when the application is in the background.
     * @value 0 disable joystick & gamecontroller input events when the application is in the background
     *        1 enable joystick & gamecontroller input events when the application is in the background
     * @default By default joystick (and gamecontroller) events are not enabled when the application is in the background.
     */
    SDL_HINT_JOYSTICK_ALLOW_BACKGROUND_EVENTS: 'SDL_JOYSTICK_ALLOW_BACKGROUND_EVENTS',
    /**
     * A hint that specifies if the SDL app should not be forced to become a foreground process on Mac OS X
     * @value 0 force the SDL app to become a foreground process (default)
     *        1 do not force the SDL app to become a foreground process
     * @default By default the SDL app will be forced to become a foreground process on Mac OS X.
     */
    SDL_HINT_MAC_BACKGROUND_APP: 'SDL_MAC_BACKGROUND_APP',
    /**
     * A hint that specifies whether ctrl+click should generate a right-click event on Mac.
     * @value 0 disable emulating right click
     *        1 enable emulating right click
     * @default By default no mouse click events are sent when clicking to focus.
     */
    SDL_HINT_MAC_CTRL_CLICK_EMULATE_RIGHT_CLICK: 'SDL_MAC_CTRL_CLICK_EMULATE_RIGHT_CLICK',
    // SDL_HINT_MOUSE_FOCUS_CLICKTHROUGH: ''
    /**
     * A hint that specifies whether relative mouse mode is implemented using mouse warping.
     * @value 0 relative mouse mode uses the raw input
     *        1 relative mouse mode uses mouse warping
     * @default By default SDL will use raw input for relative mouse mode
     */
    SDL_HINT_MOUSE_RELATIVE_MODE_WARP: 'SDL_MOUSE_RELATIVE_MODE_WARP',
    /**
     * A hint that specifies not to catch the SIGINT or SIGTERM signals.
     * @value 0 SDL will install a SIGINT and SIGTERM handler, and when it catches a signal, convert it into an SDL_QUIT event
     *        1 SDL will not install a signal handler at all
     * @default By default install a SIGINT and SIGTERM handler, and when it catches a signal, convert it into an SDL_QUIT event.
     */
    SDL_HINT_NO_SIGNAL_HANDLERS: 'SDL_NO_SIGNAL_HANDLERS',
    /**
     * A hint that specifies a variable controlling which orientations are allowed on iOS.
     * @value 'LandscapeLeft' top of device left
     *        'LandscapeRight' top of device right
     *        'Portrait' top of device up
     *        'PortraitUpsideDown' top of device down
     * @default By default all orientations are allowed.
     */
    SDL_HINT_ORIENTATIONS: 'SDL_IOS_ORIENTATIONS',
    /**
     * A hint that specifies a variable controlling whether to enable Direct3D 11+'s Debug Layer.
     * @value 0 disable Debug Layer use
     *        1 enable Debug Layer use
     * @default By default SDL does not use Direct3D Debug Layer.
     */
    SDL_HINT_RENDER_DIRECT3D11_DEBUG: 'SDL_RENDER_DIRECT3D11_DEBUG',
    /**
     * A hint that specifies whether the Direct3D device is initialized for thread-safe operations.
     * @value 0 disable thread-safety (faster)
     *        1 enable thread-safety (slower)
     * @default By default the Direct3D device is created with thread-safety disabled.
     */
    SDL_HINT_RENDER_DIRECT3D_THREADSAFE: 'SDL_RENDER_DIRECT3D_THREADSAFE',
    /**
     * A hint that specifies which render driver to use.
     * @value 'direct3d'
     *        'opengl'
     *        'opengles2'
     *        'opengles'
     *        'software'
     * @default By default the first one in the list that is available on the current platform is chosen.
     */
    SDL_HINT_RENDER_DRIVER: 'SDL_RENDER_DRIVER',
    /**
     * A hint that specifies whether the OpenGL render driver uses shaders.
     * @value 0 disable shaders
     *        1 enable shaders, if they are available
     * @default By default shaders are used if OpenGL supports them.
     */
    SDL_HINT_RENDER_OPENGL_SHADERS: 'SDL_RENDER_OPENGL_SHADERS',
    /**
     * A hint that specifies scaling quality.
     * @value 0 or 'nearest' nearest pixel sampling
     *        1 or linear linear filtering (supported by OpenGL and Direct3D)
     *        2 or best anisotropic filtering (supported by Direct3D)
     * @default By default nearest pixel sampling is used.
     */
    SDL_HINT_RENDER_SCALE_QUALITY: 'SDL_RENDER_SCALE_QUALITY',
    /**
     * A hint that specifies whether sync to vertical refresh is enabled or disabled in SDL_CreateRenderer() to avoid tearing.
     * @value 0 disable vsync
     *        1 enable vsync
     * @default By default SDL uses the SDL_RENDERER_PRESENTVSYNC flag passed into SDL_CreateRenderer().
     */
    SDL_HINT_RENDER_VSYNC: 'SDL_RENDER_VSYNC',
    /**
     * A hint that specifies a variable specifying SDL's threads stack size in bytes or "0" for the backend's default size.
     * @value 0 use the backend's default threads stack size
     *        X use the provided positive threads stack size
     * @default By default the backend's default threads stack size is used.
     */
    SDL_HINT_THREAD_STACK_SIZE: 'SDL_THREAD_STACK_SIZE',
    /**
     * A hint that specifies the timer resolution in milliseconds.
     * @value X the timer resolution in milliseconds
     * @default By default the value is "1".
     */
    SDL_HINT_TIMER_RESOLUTION: 'SDL_TIMER_RESOLUTION',
    /**
     * A hint that specifies whether the screensaver is enabled.
     * @value 0 disable screensaver
     *        1 enable screensaver
     * @default By default SDL will disable the screensaver.
     */
    SDL_HINT_VIDEO_ALLOW_SCREENSAVER: 'SDL_VIDEO_ALLOW_SCREENSAVER',
    /**
     * A hint that specifies if high-DPI windows ("Retina" on Mac and iOS) are not allowed.
     * @value 0 allow high-DPI windows
     *        1 do not allow high-DPI windows
     * @default By default high-DPI windows ("Retina" on Mac and iOS) are allowed.
     */
    SDL_HINT_VIDEO_HIGHDPI_DISABLED: 'SDL_VIDEO_HIGHDPI_DISABLED',
    /**
     * A hint that dictates policy for fullscreen Spaces on Mac OS X.
     * @value 0 disable Spaces support (FULLSCREEN_DESKTOP won't use them and SDL_WINDOW_RESIZABLE windows won't offer the "fullscreen" button on their titlebars)
     *        1 enable Spaces support (FULLSCREEN_DESKTOP will use them and SDL_WINDOW_RESIZABLE windows will offer the "fullscreen" button on their titlebars)
     * @default By default Spaces support is enabled.
     */
    SDL_HINT_VIDEO_MAC_FULLSCREEN_SPACES: 'SDL_VIDEO_MAC_FULLSCREEN_SPACES',
    /**
     * A hint that specifies if a SDL_Window is minimized if it loses key focus when in fullscreen mode.
     * @value 0 do not minimize SDL_Window if it loses key focus when in fullscreen mode
     *        1 do minimize the SDL_Window if it loses key focus when in fullscreen mode
     * @default By default a SDL_Window is minimized if it loses key focus when in fullscreen mode.
     */
    SDL_HINT_VIDEO_MINIMIZE_ON_FOCUS_LOSS: 'SDL_VIDEO_MINIMIZE_ON_FOCUS_LOSS',
    /**
     * A hint that specifies the address of another SDL_Window* (as a hex string formatted with "%p").
     * @value X the address (as a string "%p") of the SDL_Window* that new windows created with SDL_CreateWindowFrom() should share a pixel format with
     * @default By default this hint is not set.
     */
    SDL_HINT_VIDEO_WINDOW_SHARE_PIXEL_FORMAT: 'SDL_VIDEO_WINDOW_SHARE_PIXEL_FORMAT',
    /**
     * A hint that specifies which shader compiler to preload when using the Chrome ANGLE binaries.
     * @value 'd3dcompiler_46.dll' default, best for Vista or later
     *        'd3dcompiler_43.dll' for XP support
     *        'none' do not load any library, useful if you compiled ANGLE from source and included the compiler in your binaries
     * @default By default "d3dcompiler_46.dll" will be used.
     */
    SDL_HINT_VIDEO_WIN_D3DCOMPILER: 'SDL_VIDEO_WIN_D3DCOMPILER',
    /**
     * A hint that specifies whether the X11 _NET_WM_PING protocol should be supported.
     * @value 0 disable _NET_WM_PING
     *        1 enable _NET_WM_PING
     * @default By default SDL will use _NET_WM_PING, but for applications that know they will not always be able to respond to ping requests in a
     *          timely manner they can turn it off to avoid the window manager thinking the app is hung.
     */
    SDL_HINT_VIDEO_X11_NET_WM_PING: 'SDL_VIDEO_X11_NET_WM_PING',
    /**
     * A hint that specifies whether the X11 Xinerama extension should be used.
     * @value 0 disable Xinerama
     *        1 enable Xinerama
     * @default By default SDL will use Xinerama if it is available.
     */
    SDL_HINT_VIDEO_X11_XINERAMA: 'SDL_VIDEO_X11_XINERAMA',
    /**
     * A hint that specifies whether the X11 XRandR extension should be used.
     * @value 0 disable XRandR
     *        1 enable XRandR
     */
    SDL_HINT_VIDEO_X11_XRANDR: 'SDL_VIDEO_X11_XRANDR',
    /**
     * A hint that specifies whether the X11 VidMode extension should be used.
     * @value 0 disable XVidMode
     *        1 enable XVidMode
     * @default By default SDL will use XVidMode if it is available.
     */
    SDL_HINT_VIDEO_X11_XVIDMODE: 'SDL_VIDEO_X11_XVIDMODE',
    // SDL_HINT_WINDOWS_DISABLE_THREAD_NAMING
    /**
     * A hint that specifies whether the windows message loop is processed by SDL.
     * @value 0 the window message loop is not run
     *        1 the window message loop is processed in SDL_PumpEvents()
     * @default By default SDL will process the windows message loop.
     */
    SDL_HINT_WINDOWS_ENABLE_MESSAGELOOP: 'SDL_WINDOWS_ENABLE_MESSAGELOOP',
    /**
     * A hint that specifies that SDL should not to generate SDL_WINDOWEVENT_CLOSE events for Alt+F4 on Microsoft Windows.
     * @value 0 generate an SDL_WINDOWEVENT_CLOSE event for Alt+F4 (default)
     *        1 do not generate event and only do normal key handling for Alt+F4
     * @default By default SDL will generate an SDL_WINDOWEVENT_CLOSE event for Alt+F4.
     */
    SDL_HINT_WINDOWS_NO_CLOSE_ON_ALT_F4: 'SDL_WINDOWS_NO_CLOSE_ON_ALT_F4',
    /**
     * A hint that specifies a variable to allow back-button-press events on Windows Phone to be marked as handled.
     * @value 1 mark the button as handled
     * @default By default this hint is not set and the application will be terminated.
     */
    SDL_HINT_WINRT_HANDLE_BACK_BUTTON: 'SDL_WINRT_HANDLE_BACK_BUTTON',
    /**
     * A hint that specifies a label text for a WinRT app's privacy policy link.
     * @value X a label text for a WinRT app's privacy policy link
     * @default By default this hint's value is "Privacy Policy".
     */
    SDL_HINT_WINRT_PRIVACY_POLICY_LABEL: 'SDL_WINRT_PRIVACY_POLICY_LABEL',
    /**
     * A hint that specifies a URL to a WinRT app's privacy policy.
     * @value X a URL to a WinRT app's privacy policy
     * @default By default this hint is not set.
     */
    SDL_HINT_WINRT_PRIVACY_POLICY_URL: 'SDL_WINRT_PRIVACY_POLICY_URL',
    /**
     * A hint that specifies if Xinput gamepad devices are detected.
     * @value 0 disable XInput detection (only uses direct input)
     *        1 enable XInput detection (the default)
     * @default By default Xinput gamepad devices are detected.
     */
    SDL_HINT_XINPUT_ENABLED: 'SDL_XINPUT_ENABLED',
    /**
     * A hint that specifies that SDL should use the old axis and button mapping for XInput devices.
     * @value 0 use the old axis and button mapping for XInput devices
     *        1 do not use old axis and button mapping for XInput devices
     * @default By default SDL does not use the old axis and button mapping for XInput devices.
     */
    SDL_HINT_XINPUT_USE_OLD_JOYSTICK_MAPPING: 'SDL_XINPUT_USE_OLD_JOYSTICK_MAPPING'
};
//# sourceMappingURL=sdl-hints.js.map