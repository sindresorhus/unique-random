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

Type: `number`\
The minimum number that can be returned.

#### maximum

Type: `number`\
The maximum number that can be returned.

#### options

Type: `object`

##### bag

Type: `boolean`\
Default: `false`\
Puts all numbers in a bag and extracts a random one.\
The extracted number can't be the same as the previous.

> **Note:** If the bag is empty, it is reset back to the original numbers.

## Related

- [unique-random-array](https://github.com/sindresorhus/unique-random-array) - Get consecutively unique elements from an array
- [random-int](https://github.com/sindresorhus/random-int) - Generate a random integer
- [random-float](https://github.com/sindresorhus/random-float) - Generate a random float
- [random-item](https://github.com/sindresorhus/random-item) - Get a random item from an array
- [random-obj-key](https://github.com/sindresorhus/random-obj-key) - Get a random key from an object
- [random-obj-prop](https://github.com/sindresorhus/random-obj-prop) - Get a random property from an object
- [unique-random-at-depth](https://github.com/Aweary/unique-random-at-depth) - This module with an optional depth argument
- [crypto-random-string](https://github.com/sindresorhus/crypto-random-string) - Generate a cryptographically strong random string
