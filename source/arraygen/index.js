const arraygen = arr => (start, end) => {

  if (start === undefined) return arr[Symbol.iterator]();

  if (end === undefined && start > -1) {
    end = start - 1;
    start = 0;
  }

  if (start > -1) {
    end = end + 1;
  }

  return arr.slice(start, end)[Symbol.iterator]();
};

module.exports = arraygen;
