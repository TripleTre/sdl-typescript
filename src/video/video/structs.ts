export enum BlendMode {
  /**
   * no blending, dstRGBA = srcRGBA
   */
  none = 0,
  /**
   * alpha blending, dstRGB = (srcRGB * srcA) + (dstRGB * (1-srcA)), dstA = srcA + (dstA * (1-srcA))
   */
  blend = 1,
  /**
   * additive blending, dstRGB = (srcRGB * srcA) + dstRGB, dstA = dstA
   */
  add = 2,
  /**
   * color modulate, dstRGB = srcRGB * dstRGB, dstA = dstA
   */
  mod = 4
};

/**
Remarks

While you can set most OpenGL attributes normally, the attributes listed above must be known before SDL creates the 
window that will be used with the OpenGL context. These attributes are set and read with SDL_GL_SetAttribute() and 
SDL_GL_GetAttribute(). 

In some cases, these attributes are minimum requests; the GL does not promise to give you exactly what you asked for.
It's possible to ask for a 16-bit depth buffer and get a 24-bit one instead, for example, or to ask for no stencil
buffer and still have one available. Context creation should fail if the GL can't provide your requested attributes
at a minimum, but you should check to see exactly what you got. 

Multisample anti-aliasing is a type of full screen anti-aliasing. Multipsampling defaults to off but can be turned on
by setting SDL_GL_MULTISAMPLEBUFFERS to 1 and SDL_GL_MULTISAMPLESAMPLES to a value greater than 0. Typical values are
2 and 4. 

SDL_GL_CONTEXT_PROFILE_MASK determines the type of context created, while both SDL_GL_CONTEXT_MAJOR_VERSION and 
SDL_GL_CONTEXT_MINOR_VERSION determine which version. All three attributes must be set prior to creating the first window, 
and in general you can't change the value of SDL_GL_CONTEXT_PROFILE_MASK without first destroying all windows created 
with the previous setting. 

SDL_GL_CONTEXT_RELEASE_BEHAVIOR can be set to SDL_GL_CONTEXT_RELEASE_BEHAVIOR_NONE or SDL_GL_CONTEXT_RELEASE_BEHAVIOR_FLUSH. 
 */
export enum GLAttr {
  /**
   * the minimum number of bits for the red channel of the color buffer; defaults to 3
   */
  redSize = 0,
  /**
   * the minimum number of bits for the green channel of the color buffer; defaults to 3
   */
  greenSize = 1,
  /**
   * the minimum number of bits for the blue channel of the color buffer; defaults to 2
   */
  blueSize = 2,
  /**
   * the minimum number of bits for the alpha channel of the color buffer; defaults to 0
   */
  alphaSize = 3,
  /**
   * the minimum number of bits for frame buffer size; defaults to 0
   */
  bufferSize = 4,
  /**
   * whether the output is single or double buffered; defaults to double buffering on
   */
  doubleBuffer = 5,
  /**
   * the minimum number of bits in the depth buffer; defaults to 16
   */
  depthSize = 6,
  /**
   * the minimum number of bits in the stencil buffer; defaults to 0
   */
  stencilSize = 7,
  /**
   * the minimum number of bits for the red channel of the accumulation buffer; defaults to 0
   */
  accumRedSize = 8,
  /**
   * the minimum number of bits for the green channel of the accumulation buffer; defaults to 0
   */
  accumGreenSize = 9,
  /**
   * the minimum number of bits for the blue channel of the accumulation buffer; defaults to 0
   */
  accumBlueSize = 10,
  /**
   * the minimum number of bits for the alpha channel of the accumulation buffer; defaults to 0
   */
  accumAlpahSize = 11,
  /**
   * whether the output is stereo 3D; defaults to off
   */
  stereo = 12,
  /**
   * the number of buffers used for multisample anti-aliasing(抗锯齿); defaults to 0; see Remarks for details
   */
  multisampleBuffers = 13,
  /**
   * the number of samples used around the current pixel used for multisample anti-aliasing; defaults to 0; see Remarks for details
   */
  multisampleSamples = 14,
  /**
   * set to 1 to require hardware acceleration, set to 0 to force software rendering; defaults to allow either
   */
  acceleratedVisual = 15,
  /**
   * OpenGL context major version; see Remarks for details
   */
  contextMajorVersion = 17,
  /**
   * OpenGL context minor version; see Remarks for details
   */
  contextMinorVersion = 18,
  /**
   * some combination of 0 or more of elements of the SDL_GLcontextFlag enumeration; defaults to 0
   */
  contextFlags = 20,
  /**
   * type of GL context (Core, Compatibility, ES). See SDL_GLprofile; default value depends on platform
   */
  contextProfileMask = 21,
  /**
   * OpenGL context sharing; defaults to 0
   */
  shareWidthCurrentContext = 22
  /**
   * requests sRGB capable visual; defaults to 0 (>= SDL 2.0.1)
   */
  frameBufferSPGBCapable = 23,
  /**
   * sets context the release behavior; defaults to 1 (>= SDL 2.0.4)
   */
  contextReleaseBehavior = 24
}

/**
Remarks

This enumeration is used in conjunction with SDL_GL_SetAttribute and SDL_GL_CONTEXT_FLAGS. Multiple flags can be OR'd together. 

If you don't know what these values do, you should assume the defaults are already fine and shouldn't use these flags. Not only
are they not available on all platforms and GPU drivers, they can also have dramatic consequences for OpenGL functionality and 
performance, so please research them heavily before putting these flags to use. 

SDL_GL_CONTEXT_DEBUG_FLAG

This flag maps to GLX_CONTEXT_DEBUG_BIT_ARB in the GLX_ARB_create_context extension for X11 and WGL_CONTEXT_DEBUG_BIT_ARB in 
the WGL_ARB_create_context extension for Windows. This flag is currently ignored on other targets that don't support equivalent 
functionality. This flag is intended to put the GL into a "debug" mode which might offer better developer insights, possibly at
a loss of performance (although a given GL implementation may or may not do anything differently in the presence of this flag). 

SDL_GL_CONTEXT_FORWARD_COMPATIBLE_FLAG

This flag maps to GLX_CONTEXT_FORWARD_COMPATIBLE_BIT_ARB in the GLX_ARB_create_context extension for X11 and 
WGL_CONTEXT_FORWARD_COMPATIBLE_BIT_ARB in the WGL_ARB_create_context extension for Windows. This flag is currently ignored on 
other targets that don't support equivalent functionality. This flag is intended to put the GL into a "forward compatible" 
mode, which means that no deprecated functionality will be supported, possibly at a gain in performance, and only applies to 
GL 3.0 and later contexts. 

SDL_GL_CONTEXT_ROBUST_ACCESS_FLAG

This flag maps to GLX_CONTEXT_ROBUST_ACCESS_BIT_ARB in the GLX_ARB_create_context_robustness extension for X11 and 
WGL_CONTEXT_ROBUST_ACCESS_BIT_ARB in the WGL_ARB_create_context_robustness extension for Windows. This flag is currently 
ignored on other targets that don't support equivalent functionality. This flag is intended to require a GL context that 
supports the GL_ARB_robustness extension--a mode that offers a few APIs that are safer than the usual defaults 
(think snprintf() vs sprintf()). 

SDL_GL_CONTEXT_RESET_ISOLATION_FLAG

This flag maps to GLX_CONTEXT_RESET_ISOLATION_BIT_ARB in the GLX_ARB_robustness_isolation extension for X11 and 
WGL_CONTEXT_RESET_ISOLATION_BIT_ARB in the WGL_ARB_robustness_isolation extension for Windows. This flag is currently 
ignored on other targets that don't support equivalent functionality. This flag is intended to require the GL to make 
promises about what to do in the face of driver or hardware failure. 
 */
export enum GLContextFlag {
  debug = 1,
  forwardCompatible = 2,
  robustAccess = 4,
  resetIsolation = 8
}

/**
Remarks

This enumeration is used in conjunction with SDL_GL_SetAttribute() and SDL_GL_CONTEXT_PROFILE_MASK. Although the name 
SDL_GL_CONTEXT_PROFILE_MASK implies that multiple flags can be OR'd together, the profiles are mutually exclusive, and 
SDL_GL_SetAttribute() accepts at most one of them. Setting the SDL_GL_CONTEXT_PROFILE_MASK attribute to 0 leaves the 
choice of profile up to SDL. Should be used in conjunction with the SDL_GL_CONTEXT_MAJOR_VERSION and 
SDL_GL_CONTEXT_MINOR_VERSION attributes, since OpenGL profiles are defined relative to a particular version of OpenGL. 
There is no way to distinguish between the common and common lite profiles of OpenGL ES versions 1.0 and 1.1.

examples

SDL_GL_SetAttribute(SDL_GL_CONTEXT_PROFILE_MASK, SDL_GL_CONTEXT_PROFILE_ES);
 */
export enum GLProfile {
  profileCore = 1,
  profileCompatibility = 2,
  profileES = 4
}