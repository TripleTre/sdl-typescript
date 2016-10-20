const error = require('../../out/basic/sdl-error.js');
const expect = require('chai').expect;

describe('base/sdl-error', function () {
  it('是否能设置错误信息并取出', function () {
    error.setError('自定义错误信息');
    error.setError('最后一个错误信息');
    let message = error.getError();
    expect(message).to.be.equal('最后一个错误信息');
  });
  it('是否能清除错误信息', function () {
    error.clearError();
    let remaining = error.getError();
    expect(remaining).to.be.equal('');
  });
  it('setError 支持任意类型', function () {
    let fn = function () {
      error.setError(0);
      error.setError(false);
      error.setError(new Date());
      error.setError({error: 'error'});
      error.setError(undefined);
    }
    expect(fn).to.not.throw(Error);
  });
});
