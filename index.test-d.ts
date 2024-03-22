import {expectAssignable, expectType} from 'tsd';
import {consecutiveUniqueRandom, exhaustiveUniqueRandom} from './index.js';

const random1 = consecutiveUniqueRandom(1, 10);

expectAssignable<() => number>(random1);
expectType<number>(random1());

for (const number of random1) {
	expectType<number>(number);
}

const random2 = exhaustiveUniqueRandom(1, 10);

expectAssignable<() => number>(random2);
expectType<number>(random2());

for (const number of random2) {
	expectType<number>(number);
}
