export interface Options {
	/**
	Prevent extracted numbers regeneration before all possibilities are exhausted.

	@default false

	@example
	```
	import uniqueRandom from 'unique-random';

	const random = uniqueRandom(1, 3, {exhaustive: true});

	console.log(random(), random(), random(), "<exhausted>", random(), random(), random());
	//=> 1 3 2 <exhausted> 3 1 2
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
