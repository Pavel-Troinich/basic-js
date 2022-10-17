const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  
  if (arr instanceof Array) {
    let resArr = Array.from(arr);
    resArr.forEach((item, i) => {
      if (item === '--discard-next') {
        if (i === resArr.length - 1) {
          resArr.splice(i, 1);
        } else resArr.splice(i, 2);
      } else if (item === '--discard-prev') {
        if (i === 0) {
          resArr.splice(i, 1);
        } else resArr.splice(i - 1, 2);
      } else if (item === '--double-next') {
        if (i === resArr.length - 1) {
          resArr.splice(i, 1);
        } else item = resArr[i + 1];
      } else if (item === '--double-prev') {
        if (i === 0) {
          resArr.splice(i, 1);
        } else item = resArr[i - 1];
      }
    })
    return resArr;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }  
}

module.exports = {
  transform
};
