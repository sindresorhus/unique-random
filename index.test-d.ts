import {expectType} from 'tsd';
import uniqueRandom = require('.');

const random = uniqueRandom(1, 10);

expectType<() => number>(random);
expectType<number>(random());
