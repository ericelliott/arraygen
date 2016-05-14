const arraygen = arr => (start, end) => (function* gen () {
  if (!start) start = 0;
  if (!end) end = arr.length - 1;

  for (let i = start; i < end + 1; i++) {
    yield arr[i];
  }
}());

module.exports = arraygen;
