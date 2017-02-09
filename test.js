import test from 'ava';
import m from '.';

test(t => {
	const uniqueRandom = m(1, 10);
	let count = 1000;
	let current;
	let prev;

	while (--count > 0) {
		current = uniqueRandom();

		if (current === prev || current > 10 || current < 1) {
			t.fail();
		}

		prev = current;
	}
});
