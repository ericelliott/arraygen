# arraygen

Turn any array into a generator. (More accurately, grab the built-in iterator).

## Getting started

For now you'll need a recent version of Node (v6+ works great). This will not work in old browsers or old Node versions unless it gets compiled to ES5. Currently there are no precompiled bundles.

```sh
npm install --save arraygen
```

## Why?

I wrote this as an exercise to get more familiar with ES6 generators and iterators. The API is just a more natural (to me) wrapper around `Array.prototype.slice()`, but instead of returning the raw array, we return the `array[Symbol.iterator]()`. 

If this seems silly, it probably is. Let me know if you come up with any compelling use-cases.

Here's what the `arr[Symbol.iterator]()` allows you to do that you can't do with the ES5 `Array` API:

```js
let g = arraygen(['c', 'd', 'e'])();
g.next(); // { value: 'c', done: false }
g.next(); // { value: 'd', done: false }
g.next(); // { value: 'e', done: false }
g.next(); // { value: undefined, done: true }
```

What does that buy us? It means that we can pull values one at a time, perhaps in response to asynchronous events, such as user clicks, network communications, etc...

Currently, I do most of those kinds of things using [RxJS](https://github.com/Reactive-Extensions/RxJS), but now that we have native support for something like it (albeit missing most of the cool utility API), maybe there are good use cases to skip the RxJS dependency.


## How do you use it?

Destructuring assignment lets you easily grab elements from an array, for example:

```js
let [a, b] = ['a', 'b', 'c'];
console.log(a); // 'a'
console.log(b); // 'b'
```

You can even use the rest operator to grab all the remaining elements of an array:

```js
let [a, ...rest] = ['a', 'b', 'c'];
console.log(rest); // ['b', 'c']
```

OK, neat, but wouldn't it be cool if you could specify a range of elements?

For example:

```js
let gen = arraygen(['a', 'b', 'c', 'd', 'e']);
let [...arr] = gen(1, 3); // ['b', 'c', 'd']
```

This is equivalent to:

```js
let arr = ['a', 'b', 'c', 'd', 'e'].slice(1, 4); // ['b', 'c', 'd']
```

You could also grab the first `n` elements:

```js
let gen = arraygen(['a', 'b', 'c', 'd', 'e']);
let [...arr] = gen(3); // ['a', 'b', 'c'];
```

Equivalent to:

```js
let arr = ['a', 'b', 'c', 'd', 'e'].slice(0, 3); // ['a', 'b', 'c'];
```

Or the last `n` elements:

```js
let gen = arraygen(['a', 'b', 'c', 'd', 'e']);
let [...arr] = gen(-3); // ['c', 'd', 'e'];
```

Equivalent to:

```js
let arr = ['a', 'b', 'c', 'd', 'e'].slice(-3); // ['c', 'd', 'e'];
```

Grab all elements from `start` to the last element:

```js
let gen = arraygen(['a', 'b', 'c', 'd', 'e']);
let [...arr] = gen(2, 'tail'); // ['c', 'd', 'e']
```

Equivalent to:

```js
let arr = ['a', 'b', 'c', 'd', 'e'].slice(2); // ['c', 'd', 'e']
```

Of course, you can still mix and match any of this with other destructuring assignments:

```js
const gen = arraygen(['a', 'b', 'c', 'd', 'e'])(-3);
const [c, ...rest] = gen(-3);
console.log(`${ c }, ${ JSON.stringify(rest) }`); // c, ["d","e"]
```

Equvilant to:

```js
let [c, ...rest] = ['a', 'b', 'c', 'd', 'e'].slice(-3);
console.log(`${ c }, ${ JSON.stringify(rest) }`); // c, ["d","e"]
```

As you can see, the synchronous operations are probably better handled with native `array.slice()`. It's almost certainly less typing, anyway. It might get more compelling if you experiment with using asynchronous events to trigger the `.next()` method calls... Enjoy. Let me know if you do anything interesting or fun with this.


Written for Learn JavaScript with Eric Elliott
==============================================
<a href="https://ericelliottjs.com"><img width="1200" alt="eejs-screenshot" src="https://cloud.githubusercontent.com/assets/364727/8640836/76d86618-28c3-11e5-8b6e-27d9cd72180e.png"></a>

[![Join the chat at https://gitter.im/learn-javascript-courses/javascript-questions](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/learn-javascript-courses/javascript-questions?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

An online course series for application developers. Ready to jump in? [Learn more](https://ericelliottjs.com/).
