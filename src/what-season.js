const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (date == undefined) return 'Unable to determine the time of year!';
  try {
    date.getTime();
  } catch (error) {
    throw new Error('Invalid date!');
  }
  const x = date.getMonth();
             if (0<=x&&x<2||x==11) {
             return 'winter';
           } else if (1<x&&x<5) {
             return 'spring';
           } else if (4<x&&x<8) {
             return 'summer';
           } else if (7<x&&x<11) {
             return 'autumn';
           }
}


module.exports = {
  getSeason
};
