# unique-random [![Build Status](https://travis-ci.org/sindresorhus/unique-random.svg?branch=master)](https://travis-ci.org/sindresorhus/unique-random)

> Generate random numbers that are consecutively unique

Useful for things like slideshows where you don't want to have the same slide twice in a row.


## Install

```
$ npm install --save unique-random
```


## Usage

```js
var uniqueRandom = require('unique-random');
var rand = uniqueRandom(1, 10);

console.log(rand(), rand(), rand());
//=> 5 2 6
```


## API

### uniqueRandom(min, max)

Returns a function that when called will return a random number that's never the same as the previous.


## Related

- [unique-random-array](https://github.com/sindresorhus/unique-random-array) - Get consecutively unique elements from an array
- [random-int](https://github.com/sindresorhus/random-int) - Generate a random integer
- [random-float](https://github.com/sindresorhus/random-float) - Generate a random float
- [random-item](https://github.com/sindresorhus/random-item) - Get a random item from an array
- [random-obj-key](https://github.com/sindresorhus/random-obj-key) - Get a random key from an object
- [random-obj-prop](https://github.com/sindresorhus/random-obj-prop) - Get a random property from an object
- [unique-random-at-depth](https://github.com/Aweary/unique-random-at-depth) - unique-random with an optional depth argument


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
