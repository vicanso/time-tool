const now = Date.now();
const start = process.hrtime();
const currentSeconds = Math.floor(now / 1000);
const currentUs = (now % 1000) * 1000 * 1000;
const oneSecond = 1000 * 1000 * 1000;

function pad(value, length) {
  const str = '00000000000000000'.substring(0, length);
  const v = '' + value;
  return str.substring(0, length - v.length) + v;
}

function ns(v) {
  const arr = process.hrtime(start);

  const ns = arr[1] + currentUs;
  if (ns >= oneSecond) {
    return `${currentSeconds + arr[0] + 1}${pad(ns - oneSecond, 9)}`;
  }
  return `${currentSeconds + arr[0]}${pad(ns, 9)}`;
}

function us(v) {
  return ns().substring(0, 16);
}

function minus(a, b) {
  if (!a || !b) {
    throw new Error('The agrument can not be null');
  }
  /* istanbul ignore if */
  if (a.length !== b.length) {
    throw new Error('The length of minus item should be the same');
  }
  const highLength = a.length - (a.length >> 1);

  const a1 = parseInt(a.substring(0, highLength));
  const a2 = parseInt(a.substring(highLength));
  const b1 = parseInt(b.substring(0, highLength));
  const b2 = parseInt(b.substring(highLength));
  return (a1 - b1) * Math.pow(10, highLength - 1) + (a2 - b2);
}

exports.ns = ns;
exports.us = us;
exports.minus = minus;
