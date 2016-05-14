# arraygen

Turn any array into a generator.

## Getting started

For now you'll need a recent version of Node (v6+ works great). This will not work in old browsers or old Node versions unless it gets compiled to ES5. Currently there are no precompiled bundles.

```sh
npm install --save arraygen
```

## Why?

I wrote this as an exercise to get more familiar with generators. All these features are available natively with `Array.prototype.slice()`, and arrays implement the iterable interface, so I'm not sure why you might want to use this in production. Let me know if you come up with a compelling use-case. =)

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

Written for Learn JavaScript with Eric Elliott
==============================================
<a href="https://ericelliottjs.com"><img width="1200" alt="eejs-screenshot" src="https://cloud.githubusercontent.com/assets/364727/8640836/76d86618-28c3-11e5-8b6e-27d9cd72180e.png"></a>

[![Join the chat at https://gitter.im/learn-javascript-courses/javascript-questions](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/learn-javascript-courses/javascript-questions?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

An online course series for application developers. Ready to jump in? [Learn more](https://ericelliottjs.com/).
