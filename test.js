import test from 'ava';
import assertInRange from './assert-in-range.js';
import {consecutiveUniqueRandom, exhaustiveUniqueRandom} from './index.js';

function testConsecutiveUniqueness(t, uniqueRandom) {
	const random = uniqueRandom(1, 10);
	let previousValue;

	for (let count = 0; count < 1000; count++) {
		const currentValue = random();

		assertInRange(t, currentValue, {start: 1, end: 10});
		if (previousValue !== undefined) {
			t.not(currentValue, previousValue);
		}

		previousValue = currentValue;
	}
}

test('consecutiveUniqueRandom - main', t => {
	testConsecutiveUniqueness(t, consecutiveUniqueRandom);
});

test('consecutiveUniqueRandom - iterator', t => {
	t.plan(3); // In case the for-of loop doesn't run

	const random = consecutiveUniqueRandom(1, 10);

	for (const number of random) { // eslint-disable-line no-unreachable-loop
		assertInRange(t, number, {start: 1, end: 10});
		break;
	}

	const {value, done} = random[Symbol.iterator]().next();

	assertInRange(t, value, {start: 1, end: 10});
	t.false(done);
});

test('exhaustiveUniqueRandom - main', t => {
	const random = exhaustiveUniqueRandom(1, 5);
	const seenValuesCount = new Map(Array.from({length: 5}, (_, index) => [index + 1, 0]));

	for (let count = 1; count <= 10; count++) {
		const value = random();
		assertInRange(t, value, {start: 1, end: 5});
		t.true(seenValuesCount.get(value) < 2, 'Value should only appear twice');
		seenValuesCount.set(value, seenValuesCount.get(value) + 1);
	}
});

test('exhaustiveUniqueRandom - consecutive uniqueness', t => {
	testConsecutiveUniqueness(t, exhaustiveUniqueRandom);
});

test('exhaustiveUniqueRandom - iterator', t => {
	t.plan(3); // In case the for-of loop doesn't run

	const random = exhaustiveUniqueRandom(1, 10);

	for (const number of random) { // eslint-disable-line no-unreachable-loop
		assertInRange(t, number, {start: 1, end: 10});
		break;
	}

	const {value, done} = random[Symbol.iterator]().next();

	assertInRange(t, value, {start: 1, end: 10});
	t.false(done);
});
