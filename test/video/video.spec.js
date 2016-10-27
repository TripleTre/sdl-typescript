const video = require('../../out/video/video');
const sdl = require('../../out/basic/sdl');
const expect = require('chai').expect;
const pixels = require('../../out/pixels');

function pureEnumToArray(en) {
  let ret = [];
  for (let attr in en) {
    if (/\d+/.test(attr)) {
      ret.push(en[attr]);
    }
  }
  return ret;
}

describe('video/video', function() {
  it('getClosestDisplayMode是否能确工作', function () {
    sdl.init(sdl.InitOption.SDL_INIT_VIDEO);
    let mode = video.getClosestDisplayMode(0, {
      format: 0,
      w: 1920,
      h: 1080,
      refresh_rate: 0
    });
    expect(mode).to.have.property('format')
                .and.to.be.oneOf(pureEnumToArray(pixels.PixelFormat));
    expect(mode).to.have.property('w').and.to.be.a('number');
    expect(mode).to.have.property('h').and.to.be.a('number');
    expect(mode).to.have.property('refresh_rate').and.to.be.a('number');
    expect(mode).to.have.property('driverdata');
  });
});