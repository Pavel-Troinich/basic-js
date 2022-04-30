const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let red = str.split('').reduce((a, c) => {
    a.length > 0 && a[a.length-1][1] == c ? (a[a.length-1][0] += 1) : a.push([1, c]);
    return a;
  }, [])
  let res = red.flat().join('').replace(/1/g, '');
  return res
}

module.exports = {
  encodeLine
};
