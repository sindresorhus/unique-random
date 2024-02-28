import {expectAssignable, expectType} from 'tsd';
import uniqueRandom from './index.js';

const random = uniqueRandom(1, 10);

expectAssignable<() => number>(random);
expectType<number>(random());

for (const number of random) {
	expectType<number>(number);
}
