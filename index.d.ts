/**
Generate random numbers that are consecutively unique, meaning that each number in the sequence is distinct from the one immediately before it.

@returns A function, that when called, will return a random number that is never the same as the previous.

@example
```
import {consecutiveUniqueRandom} from 'unique-random';

const random = consecutiveUniqueRandom(1, 10);

console.log(random(), random(), random());
//=> 5 2 6
```

The returned function is also an iterable which consumes from the same source as the function:

@example
```
import {consecutiveUniqueRandom} from 'unique-random';

const random = consecutiveUniqueRandom(1, 10);

for (const number of random) {
	console.log(number);

	// The unique numbers will be iterated over infinitely
	if (stopCondition) {
		break;
	}
}
```

Note: If `minimum` is equal to `maximum`, the same value will always be returned.
*/
export function consecutiveUniqueRandom(minimum: number, maximum: number): (() => number) & {[Symbol.iterator](): Iterator<number>};

/**
Generate random numbers that do not repeat until the entire range has appeared.

@returns A function, that when called, will return a random number that is never the same as any previously returned until the entire range of possible numbers has been returned.

@example
```
import {exhaustiveUniqueRandom} from 'unique-random';

const random = exhaustiveUniqueRandom(1, 10);

console.log(random(), random(), random());
//=> 5 2 6
```

The returned function is also an iterable which consumes from the same source as the function:

@example
```
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

Note: If `minimum` is equal to `maximum`, the same value will always be returned.
*/
export function exhaustiveUniqueRandom(minimum: number, maximum: number): (() => number) & {[Symbol.iterator](): Iterator<number>};
