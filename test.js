import test from 'ava';
import uniqueRandom from './index.js';

test('main', t => {
	const random = uniqueRandom(1, 10);
	let count = 1000;
	let currentValue;
	let previousValue;

	while (--count > 0) {
		currentValue = random();

		if (
			currentValue === previousValue ||
			currentValue > 10 ||
			currentValue < 1
		) {
			t.fail();
		}

		previousValue = currentValue;
	}

	t.pass();
});

test('options: noOverlap', t => {
	const random = uniqueRandom(1, 10, {noOverlap: true});
	const maxNumbers = 10;
	let count = 1000;
	let currentValue;
	let previousValue;

	const extracted = new Set();

	while (--count > 0) {
		currentValue = random();

		if (extracted.size === maxNumbers) {
			extracted.clear();
		}

		if (
			currentValue === previousValue ||
			currentValue > 10 ||
			currentValue < 1 ||
			extracted.has(currentValue)
		) {
			t.fail();
		}

		previousValue = currentValue;
		extracted.add(currentValue);
	}

	t.pass();
});
