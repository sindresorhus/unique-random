# unique-random

> Generate random numbers that are consecutively unique

Useful for things like slideshows where you don't want to have the same slide twice in a row.

## Install

```sh
npm install unique-random
```

## Usage

```js
import {consecutiveUniqueRandom} from 'unique-random';

const random = consecutiveUniqueRandom(1, 10);

console.log(random(), random(), random());
//=> 5 2 6
```

## API

### consecutiveUniqueRandom(minimum, maximum)

Generate random numbers that are consecutively unique, meaning that each number in the sequence is distinct from the one immediately before it.

### exhaustiveUniqueRandom(minimum, maximum)

Generate random numbers that do not repeat until the entire range has appeared.

### `consecutiveUniqueRandom` and `exhaustiveUniqueRandom`

Returns a function, that when called, will return the generated number.

The returned function is also an iterable which consumes from the same source as the function:

```js
import {exhaustiveUniqueRandom} from 'unique-random';

const random = exhaustiveUniqueRandom(1, 10);

for (const number of random) {
	console.log(number);

	// The unique numbers will be iterated over infinitely
	if (stopCondition) {
		break;
	}
}
```

> [!NOTE]
> If `minimum` is equal to `maximum`, the same value will always be returned.

## Related

- [unique-random-array](https://github.com/sindresorhus/unique-random-array) - Get consecutively unique elements from an array
- [random-int](https://github.com/sindresorhus/random-int) - Generate a random integer
- [random-float](https://github.com/sindresorhus/random-float) - Generate a random float
- [random-item](https://github.com/sindresorhus/random-item) - Get a random item from an array
- [random-obj-key](https://github.com/sindresorhus/random-obj-key) - Get a random key from an object
- [random-obj-prop](https://github.com/sindresorhus/random-obj-prop) - Get a random property from an object
- [unique-random-at-depth](https://github.com/Aweary/unique-random-at-depth) - This module with an optional depth argument
- [crypto-random-string](https://github.com/sindresorhus/crypto-random-string) - Generate a cryptographically strong random string
