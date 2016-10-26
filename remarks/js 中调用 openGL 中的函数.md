在绑定 SDL_GL_CreateContext 这个函数的时候发现 sdl 可以直接调用 openGL 函数来绘图。  
但是 C 代码里都是引入 gl.h 头文件然后调用 openGL 的函数， 那么 js 中怎么调用？

经查询， SDL 提供了一个 SDL_GL_GetProcAddress 函数， 查看 api 说明， 好像是用来获取  
openGL 函数用的。于是用 ffi.Function 将 openGL 函数转换为 js 函数， 但是对 openGL  
还不熟悉， 没有测试绘制图形。 只找到一个 glGetError() 函数， 经测试此函数调用后返回 0 。  
对应的是 GLenum.GL_NO_ERROR 常量, 暂时认为调用成功， 稍后再来测试绘制函数是否能正确工  
作。

具体过程是：

``` typescript
  // 先定义转换的生成器函数(由 c 函数生产 js 函数), 需查 openGL 文档获取参数和返回值类型
  let GLGetErrorFunction = ffi.Function(types.uint32, [types.void]);
  // ffi.Library 绑定 SDL_GL_GetProcAddress 函数
  let lib = Object.create(null);
  library({
    SDL_GL_GetProcAddress: [types.void_p, [types.CString]]
  }, lib)
  // 相应的 js 函数
  function getGLFunction(name: string, creator: any): function {
    return creator.toFunction(lib.SDL_GL_GetProcAddress(name));
  }
  // 获取可调用的 js 函数
  let glGetError = getGLFunction('glGetError', GLGetErrorFunction);
  glGetError(); // 返回 0
```
