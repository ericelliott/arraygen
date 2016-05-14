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

test('Explicit Tail', assert => {
  const msg = 'gen(n, length) should grab all elements between n and the last element';

  const gen = arraygen(['a', 'b', 'c', 'd', 'e']);
  const [...actual] = gen(2, 4);
  const expected = ['c', 'd', 'e'];

  assert.same(actual, expected, msg);
  assert.end();
});

test('Tail keyword', assert => {
  const msg = 'gen(n, \'tail\') should grab all elements between n and the last element';

  const gen = arraygen(['a', 'b', 'c', 'd', 'e']);
  const [...actual] = gen(2, 'tail');
  const expected = ['c', 'd', 'e'];

  assert.same(actual, expected, msg);
  assert.end();
});

test('Range', assert => {
  const msg = 'gen(n, end) should grab all elements between n and end';

  const gen = arraygen(['a', 'b', 'c', 'd', 'e']);
  const [...actual] = gen(1, 3);
  const expected = ['b', 'c', 'd'];

  assert.same(actual, expected, msg);
  assert.end();
});

test('All', assert => {
  const msg = 'gen() should grab all elements';

  const gen = arraygen(['a', 'b', 'c', 'd', 'e']);
  const [...actual] = gen();
  const expected = ['a', 'b', 'c', 'd', 'e'];

  assert.same(actual, expected, msg);
  assert.end();
});

test('first n', assert => {
  const msg = 'gen(n) should grab the first n elements';

  const gen = arraygen(['a', 'b', 'c', 'd', 'e']);
  const [...actual] = gen(3);
  const expected = ['a', 'b', 'c'];

  assert.same(actual, expected, msg);
  assert.end();
});

test('last n', assert => {
  const msg = 'gen(-n) should grab the last n elements';

  const gen = arraygen(['a', 'b', 'c', 'd', 'e']);
  const [...actual] = gen(-3);
  const expected = ['c', 'd', 'e'];

  assert.same(actual, expected, msg);
  assert.end();
});
