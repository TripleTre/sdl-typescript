const rect = require('../../out/rect');
const sdl = require('../../out/basic/sdl');
const expect = require('chai').expect;

describe('rect', function() {
  it('function enclosePoints', function () {
    let points = [{x: 40, y: 98}, {x: 444, y: 233}, {x: 100, y: 100}],
        nullEnclose = [{x: 1, y: 1}, {x: 2, y: 2}],
        clip = {x: 10, y: 10, w: 120, h: 120},
        result1 = rect.enclosePoints(points),
        result2 = rect.enclosePoints(points, clip),
        result3 = rect.enclosePoints(nullEnclose, clip);
    expect(result1).to.deep.equal({x: 40, y: 98, w: 405, h: 136});
    expect(result2).to.deep.equal({x: 40, y: 98, w: 61, h: 3});
    expect(result3).to.equal(rect.EMPTY_RECT);
  });

  it('function hasIntersection', function() {
    let rectA = {x: 0, y: 0, w: 100, h: 100},
        rectB = {x: 50, y: 50, w: 50, h: 50},
        rectC = {x: 500, y: 500, w: 100, h: 100};
    expect(rect.hasIntersection(rectA, rectB)).to.be.true;
    expect(rect.hasIntersection(rectC, rectB)).to.be.false;
  });

  it('function intersectRect', function() {
    let rectA = {x: 0, y: 0, w: 100, h: 100},
        rectB = {x: 50, y: 50, w: 50, h: 50};
    expect(rect.intersectRect(rectA, rectB)).to.deep.equal({x: 50, y: 50, w: 50, h: 50});
  });

  it('function pointInRect', function() {
    let point = {x: 5, y: 10},
        rectA = {x: 0, y: 0, w: 6, h: 6},
        rectB = {x: 0, y: 0, w: 20, h: 20};
    expect(rect.pointInRect(point, rectB)).to.be.true;
    expect(rect.pointInRect(point, rectA)).to.be.false;
  });

  it('function rectEmpty', function() {
    expect(rect.rectEmpty(rect.EMPTY_RECT)).to.be.true;
    expect(rect.rectEmpty({x:0, y:0, w: 1, h:2})).to.be.false;
  });

  it('function rectEquals', function() {
    expect(rect.rectEquals({x: 0, y: 0, w: 6, h: 6}, rect.EMPTY_RECT)).to.be.false;
    expect(rect.rectEquals(rect.EMPTY_RECT, rect.EMPTY_RECT)).to.be.true;
  });

  it('function unionRect', function() {
    let rectA = {x: 0, y: 0, w: 10, h: 10}
        rectB = {x: 20, y: 20, w: 20, h: 20}
        rectC = {x: 100, y: 100, w: 100, h: 100};
        rectD = {x: 150, y: 50, w: 20, h: 20};
    expect(rect.unionRect(rectA, rectB)).to.deep.equal({x: 0, y: 0, w: 40, h: 40});
    expect(rect.unionRect(rectA, rectC)).to.deep.equal({x: 0, y: 0, w: 200, h: 200});
    expect(rect.unionRect(rectC, rectD)).to.deep.equal({x: 100, y: 50, w: 100, h: 150});
  });
});
