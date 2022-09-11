export interface Options {
	/**
	Prevent extracted numbers regeneration before all possibilities are exhausted.\
	After all numbers in the range are extracted, start again and pick from the same range randomly.

	Example use case:\
	Image carousel with random images cross-fading, where images are displayed randomly and never repeat until all are displayed once, also making sure the showing image is never the same as the previous one.

	@default false

	@example
	```
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
	*/
	readonly exhaustive?: boolean;
}

/**
Generate random numbers that are consecutively unique.

@returns A function, that when called, will return a random number that is never the same as the previous.

@example
```
import uniqueRandom from 'unique-random';

const random = uniqueRandom(1, 10);

console.log(random(), random(), random());
//=> 5 2 6
```
*/
export default function uniqueRandom(minimum: number, maximum: number, options?: Options): () => number;
