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
  if (date == undefined) {
  return 'Unable to determine the time of year!';
} else {
  // let err = new Error("Invalid date!");
//   let x = date.getMonth();
  // if (({}.toString.call(date)).slice(8, -1) !== "Date") {
    if (isNaN(Date.parse(date))) {
           throw new Error("Invalid date!");
           } else if (0<=date.getMonth()&&date.getMonth()<2||date.getMonth()==11) {
             return 'winter';
           } else if (1<date.getMonth()&&date.getMonth()<5) {
             return 'spring';
           } else if (4<date.getMonth()&&date.getMonth()<8) {
             return 'summer';
           } else if (7<date.getMonth()&&date.getMonth()<11) {
             return 'autumn'
           };
  }
}

module.exports = {
  getSeason
};
