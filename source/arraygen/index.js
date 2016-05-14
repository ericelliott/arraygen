const arraygen = arr => (start, end) => (function* gen () {
  if (start === undefined) {
    start = 0;
    end = arr.length - 1;
  }
  if (end === undefined) {
    end = start - 1;
    start = 0;
  }
  if (end < 0) {
    start = arr.length - Math.abs(end + 1);
    end = arr.length - 1;
  }

  for (let i = start; i < end + 1; i++) {
    yield arr[i];
  }
}());

module.exports = arraygen;
