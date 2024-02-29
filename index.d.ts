/**
Generate random numbers that are consecutively unique.

@returns Returns a function, that when called, will return a random number that is never the same as the previous.

@example
```
import uniqueRandom from 'unique-random';

const random = uniqueRandom(1, 10);

console.log(random(), random(), random());
//=> 5 2 6
```

The returned function is also an iterable which consumes from the same source as the function:

@example
```
import uniqueRandom from 'unique-random';

const random = uniqueRandom(1, 10);

for (const number of random) {
	console.log(number);

	// The unique numbers will be iterated over infinitely
	if (stopCondition) {
		break;
	}
}
```
*/
export default function uniqueRandom(minimum: number, maximum: number): (() => number) & {[Symbol.iterator](): Iterator<number>};
