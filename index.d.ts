interface Options {
	/**
	 * Puts all numbers in a bag and extracts a random one.\
	 * The extracted number can't be the same as the previous.\
	 * If the bag is empty, it is reset back to the original numbers.
	 * @default false
	 */
	readonly bag?: boolean;
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
