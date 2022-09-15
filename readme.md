# unique-random

> Generate random numbers that are consecutively unique

Useful for things like slideshows where you don't want to have the same slide twice in a row.

## Install

```
$ npm install unique-random
```

## Usage

```js
import uniqueRandom from 'unique-random';

const random = uniqueRandom(1, 10);

console.log(random(), random(), random());
//=> 5 2 6
```

## API

### uniqueRandom(minimum, maximum, options?)

Returns a function, that when called, will return a random number that is never the same as the previous.

#### minimum

Type: `number`

The minimum number that can be returned.

#### maximum

Type: `number`

The maximum number that can be returned.

#### options

Type: `object`

##### exhaustive

Type: `boolean`\
Default: `false`

Prevent extracted numbers regeneration before all possibilities are exhausted.\
After all numbers in the range are extracted, start again and pick from the same range randomly.


> **Example use case**\
> Image carousel with random images cross-fading, where images are displayed randomly and never repeat until all are displayed once, also making sure the showing image is never the same as the previous one.

Example:

```js
import uniqueRandom from 'unique-random';

const random = uniqueRandom(1, 3, {exhaustive: true});

console.log(random(), random(), random(), random(), random(), random());
//=> 1
//=> 3
//=> 2 // We exhausted all the numbers in the 1..3 range, so start again and pick from the range 1..3.
//=> 3
//=> 1
//=> 2
```

## Related

- [unique-random-array](https://github.com/sindresorhus/unique-random-array) - Get consecutively unique elements from an array
- [random-int](https://github.com/sindresorhus/random-int) - Generate a random integer
- [random-float](https://github.com/sindresorhus/random-float) - Generate a random float
- [random-item](https://github.com/sindresorhus/random-item) - Get a random item from an array
- [random-obj-key](https://github.com/sindresorhus/random-obj-key) - Get a random key from an object
- [random-obj-prop](https://github.com/sindresorhus/random-obj-prop) - Get a random property from an object
- [unique-random-at-depth](https://github.com/Aweary/unique-random-at-depth) - This module with an optional depth argument
- [crypto-random-string](https://github.com/sindresorhus/crypto-random-string) - Generate a cryptographically strong random string
