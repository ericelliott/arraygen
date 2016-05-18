const slice = require('slice');

const arraygen = arr => function* gen (start, end) {
  yield* slice(arr, start, end);
};

module.exports = arraygen;
