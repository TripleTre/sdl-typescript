"use strict";
(function (BlendMode) {
    /**
     * no blending, dstRGBA = srcRGBA
     */
    BlendMode[BlendMode["none"] = 0] = "none";
    /**
     * alpha blending, dstRGB = (srcRGB * srcA) + (dstRGB * (1-srcA)), dstA = srcA + (dstA * (1-srcA))
     */
    BlendMode[BlendMode["blend"] = 1] = "blend";
    /**
     * additive blending, dstRGB = (srcRGB * srcA) + dstRGB, dstA = dstA
     */
    BlendMode[BlendMode["add"] = 2] = "add";
    /**
     * color modulate, dstRGB = srcRGB * dstRGB, dstA = dstA
     */
    BlendMode[BlendMode["mod"] = 4] = "mod";
})(exports.BlendMode || (exports.BlendMode = {}));
var BlendMode = exports.BlendMode;
;
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
(function (GLAttr) {
    /**
     * the minimum number of bits for the red channel of the color buffer; defaults to 3
     */
    GLAttr[GLAttr["redSize"] = 0] = "redSize";
    /**
     * the minimum number of bits for the green channel of the color buffer; defaults to 3
     */
    GLAttr[GLAttr["greenSize"] = 1] = "greenSize";
    /**
     * the minimum number of bits for the blue channel of the color buffer; defaults to 2
     */
    GLAttr[GLAttr["blueSize"] = 2] = "blueSize";
    /**
     * the minimum number of bits for the alpha channel of the color buffer; defaults to 0
     */
    GLAttr[GLAttr["alphaSize"] = 3] = "alphaSize";
    /**
     * the minimum number of bits for frame buffer size; defaults to 0
     */
    GLAttr[GLAttr["bufferSize"] = 4] = "bufferSize";
    /**
     * whether the output is single or double buffered; defaults to double buffering on
     */
    GLAttr[GLAttr["doubleBuffer"] = 5] = "doubleBuffer";
    /**
     * the minimum number of bits in the depth buffer; defaults to 16
     */
    GLAttr[GLAttr["depthSize"] = 6] = "depthSize";
    /**
     * the minimum number of bits in the stencil buffer; defaults to 0
     */
    GLAttr[GLAttr["stencilSize"] = 7] = "stencilSize";
    /**
     * the minimum number of bits for the red channel of the accumulation buffer; defaults to 0
     */
    GLAttr[GLAttr["accumRedSize"] = 8] = "accumRedSize";
    /**
     * the minimum number of bits for the green channel of the accumulation buffer; defaults to 0
     */
    GLAttr[GLAttr["accumGreenSize"] = 9] = "accumGreenSize";
    /**
     * the minimum number of bits for the blue channel of the accumulation buffer; defaults to 0
     */
    GLAttr[GLAttr["accumBlueSize"] = 10] = "accumBlueSize";
    /**
     * the minimum number of bits for the alpha channel of the accumulation buffer; defaults to 0
     */
    GLAttr[GLAttr["accumAlpahSize"] = 11] = "accumAlpahSize";
    /**
     * whether the output is stereo 3D; defaults to off
     */
    GLAttr[GLAttr["stereo"] = 12] = "stereo";
    /**
     * the number of buffers used for multisample anti-aliasing(抗锯齿); defaults to 0; see Remarks for details
     */
    GLAttr[GLAttr["multisampleBuffers"] = 13] = "multisampleBuffers";
    /**
     * the number of samples used around the current pixel used for multisample anti-aliasing; defaults to 0; see Remarks for details
     */
    GLAttr[GLAttr["multisampleSamples"] = 14] = "multisampleSamples";
    /**
     * set to 1 to require hardware acceleration, set to 0 to force software rendering; defaults to allow either
     */
    GLAttr[GLAttr["acceleratedVisual"] = 15] = "acceleratedVisual";
    /**
     * OpenGL context major version; see Remarks for details
     */
    GLAttr[GLAttr["contextMajorVersion"] = 17] = "contextMajorVersion";
    /**
     * OpenGL context minor version; see Remarks for details
     */
    GLAttr[GLAttr["contextMinorVersion"] = 18] = "contextMinorVersion";
    /**
     * some combination of 0 or more of elements of the SDL_GLcontextFlag enumeration; defaults to 0
     */
    GLAttr[GLAttr["contextFlags"] = 20] = "contextFlags";
    /**
     * type of GL context (Core, Compatibility, ES). See SDL_GLprofile; default value depends on platform
     */
    GLAttr[GLAttr["contextProfileMask"] = 21] = "contextProfileMask";
    /**
     * OpenGL context sharing; defaults to 0
     */
    GLAttr[GLAttr["shareWidthCurrentContext"] = 22] = "shareWidthCurrentContext";
    /**
     * requests sRGB capable visual; defaults to 0 (>= SDL 2.0.1)
     */
    GLAttr[GLAttr["frameBufferSPGBCapable"] = 23] = "frameBufferSPGBCapable";
    /**
     * sets context the release behavior; defaults to 1 (>= SDL 2.0.4)
     */
    GLAttr[GLAttr["contextReleaseBehavior"] = 24] = "contextReleaseBehavior";
})(exports.GLAttr || (exports.GLAttr = {}));
var GLAttr = exports.GLAttr;
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
(function (GLContextFlag) {
    GLContextFlag[GLContextFlag["debug"] = 1] = "debug";
    GLContextFlag[GLContextFlag["forwardCompatible"] = 2] = "forwardCompatible";
    GLContextFlag[GLContextFlag["robustAccess"] = 4] = "robustAccess";
    GLContextFlag[GLContextFlag["resetIsolation"] = 8] = "resetIsolation";
})(exports.GLContextFlag || (exports.GLContextFlag = {}));
var GLContextFlag = exports.GLContextFlag;
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
(function (GLProfile) {
    GLProfile[GLProfile["profileCore"] = 1] = "profileCore";
    GLProfile[GLProfile["profileCompatibility"] = 2] = "profileCompatibility";
    GLProfile[GLProfile["profileES"] = 4] = "profileES";
})(exports.GLProfile || (exports.GLProfile = {}));
var GLProfile = exports.GLProfile;
//# sourceMappingURL=enum.js.map