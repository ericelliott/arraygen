# arraygen

Turn any array into a generator.

## Getting started

For now you'll need a recent version of Node (v6+ works great). This will not work in old browsers or old Node versions unless it gets compiled to ES5. Currently there are no precompiled bundles.

```sh
npm install --save arraygen
```

## Why?

Destructuring assignment lets you easily grab elements from an array, for example:

```js
const [a, b] = ['a', 'b', 'c'];
console.log(a); // 'a'
console.log(b); // 'b'
```

You can even use the rest operator to grab all the remaining elements of an array:

```js
const [a, ...rest] = ['a', 'b', 'c'];
console.log(rest); // ['b', 'c']
```

OK, neat, but wouldn't it be cool if you could specify a range of elements?

A generator function returns an iterable object, meaning that destructuring
assignment and `for...of` loops work with generators. What if you could wrap
any array with a generator to take advantage of these properties? For example:

```js
const gen = arraygen(['a', 'b', 'c', 'd', 'e']);
const [...arr] = gen(1, 3); // ['b', 'c', 'd']
```

You could also use this to grab the first `n` elements:

```js
const gen = arraygen(['a', 'b', 'c', 'd', 'e']);
const [...arr] = gen(3); /// ['a', 'b', 'c'];
```

Or the last `n` elements:

```js
const gen = arraygen(['a', 'b', 'c', 'd', 'e']);
const [...arr] = gen(-3); // ['c', 'd', 'e'];
```

Of course, you can mix and match any of this with other destructuring assignments:

```js
const gen = arraygen(['a', 'b', 'c', 'd', 'e']);
const [c, ...rest] = gen(-3);
console.log(`${ c }, ${ JSON.stringify(rest) }`); // c, ["d","e"]
```
