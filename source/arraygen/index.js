const slice = require('slice');

const arraygen = arr => (start, end) => {
  return slice(arr, start, end)[Symbol.iterator]();
};

module.exports = arraygen;
