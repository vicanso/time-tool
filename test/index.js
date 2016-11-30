const assert = require('assert');
const timeTool = require('..');

describe('time-tool', () => {
  it('get ns success', () => {
    const ns = timeTool.ns();
    assert.equal(ns.length, 19);
    assert(Date.now() - parseInt(ns.substring(0, 13)) <= 1);
  });

  it('get us success', () => {
    const us = timeTool.us();
    assert.equal(us.length, 16);
    assert(Date.now() - parseInt(us.substring(0, 13)) <= 1);
  });

  it('minus success', () => {
    assert.equal(timeTool.minus('1480513813865', '1480113813864'), 400000001);

    assert.equal(timeTool.minus('1480093813865', '1480113813864'), -19999999);
  });
});
