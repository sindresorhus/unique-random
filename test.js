import test from 'ava';
import assertInRange from './assert-in-range.js';
import uniqueRandom from './index.js';

test('main', t => {
	const random = uniqueRandom(1, 10);
	let count = 1000;
	let currentValue;
	let previousValue;

	while (--count > 0) {
		currentValue = random();

		assertInRange(t, currentValue, {start: 1, end: 10});
		if (previousValue !== undefined) {
			t.not(currentValue, previousValue);
		}

		previousValue = currentValue;
	}

	t.pass();
});

test('iterator', t => {
	t.plan(3); // In case the for-of loop doesn't run

	const random = uniqueRandom(1, 10);

	for (const number of random) { // eslint-disable-line no-unreachable-loop
		assertInRange(t, number, {start: 1, end: 10});
		break;
	}

	const {value, done} = random[Symbol.iterator]().next();

	assertInRange(t, value, {start: 1, end: 10});
	t.false(done);
});
