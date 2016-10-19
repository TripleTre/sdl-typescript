const sdl = require('../../out/basic/sdl.js');
const expect = require('chai').expect;

describe('basic/sdl', function () {
  it('调用 init 时应该返回 0', function () {
    let ret = sdl.init(sdl.initOption.SDL_INIT_TIMER | sdl.initOption.SDL_INIT_AUDIO);
    expect(ret).to.equal(0);
  });
  it('调用 initSubSystem 时应该返回 0', function () {
    let ret = sdl.initSubSystem(sdl.initOption.SDL_INIT_EVERYTHING);
    expect(ret).to.equal(0);
  });
  it('是否已经初始化指定系统', function () {
    let everything = sdl.wasInit(0);
    let event = sdl.wasInit(sdl.initOption.SDL_INIT_EVENTS);
    expect(event).to.equal(0x00004000);
    expect(everything).to.equal(29233);
  });
  it('是否能关闭指定系统', function () {
    sdl.quitSubSystem(sdl.initOption.SDL_INIT_JOYSTICK);
    let joystick = sdl.wasInit(sdl.initOption.SDL_INIT_JOYSTICK | sdl.initOption.SDL_INIT_EVENTS);
    // joystick 已经关闭， 返回 events 对应掩码
    expect(joystick).to.be.equal(16384);
  });
  it('是否能关闭所有系统', function () {
    sdl.quit();
    let everything = sdl.wasInit(sdl.initOption.SDL_INIT_EVERYTHING);
    expect(everything).to.be.equal(0);
  });
});
