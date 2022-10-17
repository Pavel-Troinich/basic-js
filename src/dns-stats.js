const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let rezObj = {};
  domains.forEach(item => {
    let splittedDomains = item.split('.').reverse();
    let varDomain = '';
    splittedDomains.forEach(part => {
      varDomain += `.${part}`;
      rezObj[varDomain] ? rezObj[varDomain]++ : rezObj[varDomain] = 1;
    })
  })
  return rezObj;
}

module.exports = {
  getDNSStats
};
