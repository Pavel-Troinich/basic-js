const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
const depthArr = (arr) => arr.some(item => Array.isArray(item));
class DepthCalculator {
  calculateDepth(arr) {
    let res = 1;
    if (depthArr(arr)) {
      let arr1 = arr.reduce((a, c) => a.concat(c), []);
      return res + this.calculateDepth(arr1);
    }
    return res;
  }
}

module.exports = {
  DepthCalculator
};
