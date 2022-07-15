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

test('preventRepeat', t => {
	const random = uniqueRandom(1, 10, true);
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
