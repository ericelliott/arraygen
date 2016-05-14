const test = require('tape');
const arraygen = require('arraygen');

test('Head', assert => {
  const msg = 'gen(0, end) should grab all elements between 0 and end';

  const gen = arraygen(['a', 'b', 'c', 'd', 'e']);
  const [...actual] = gen(0, 2);
  const expected = ['a', 'b', 'c'];

  assert.same(actual, expected, msg);
  assert.end();
});

test('Tail', assert => {
  const msg = 'gen(n, end) should grab all elements between n and end';

  const gen = arraygen(['a', 'b', 'c', 'd', 'e']);
  const [...actual] = gen(2, 4);
  const expected = ['c', 'd', 'e'];

  assert.same(actual, expected, msg);
  assert.end();
});

test('Tail', assert => {
  const msg = 'gen() should grab all elements';

  const gen = arraygen(['a', 'b', 'c', 'd', 'e']);
  const [...actual] = gen();
  const expected = ['a', 'b', 'c', 'd', 'e'];

  assert.same(actual, expected, msg);
  assert.end();
});
