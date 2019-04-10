import test from 'ava';
import uniqueRandom from '.';

test('main', t => {
	const random = uniqueRandom(1, 10);
	let count = 1000;
	let current;
	let prev;

	while (--count > 0) {
		current = random();

		if (current === prev || current > 10 || current < 1) {
			t.fail();
		}

		prev = current;
	}

	t.pass();
});
