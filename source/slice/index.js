const slice = (arr, start, end) => {

  if (start === undefined) return arr;

  if (end === undefined && start > -1) {
    end = start - 1;
    start = 0;
  }

  if (end === 'tail') return arr.slice(start);

  if (start > -1) {
    end = end + 1;
  }

  return arr.slice(start, end);
};

module.exports = slice;
