import {expectType} from 'tsd';
import uniqueRandom from './index.js';

const random = uniqueRandom(1, 10);

expectType<() => number>(random);
expectType<number>(random());

for (const number of random) {
	expectType<number>(number);
}
