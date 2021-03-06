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
export default function uniqueRandom(minimum: number, maximum: number): () => number;
