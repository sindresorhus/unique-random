function * range(minimum, maximum) {
	for (let number = minimum; number <= maximum; number++) {
		yield number;
	}
}

function randomInteger(minimum, maximum) {
	return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function randomIntegerWithout(minimum, maximum, excludedValue) {
	const number = randomInteger(minimum, maximum - 1);

	return number >= excludedValue ? number + 1 : number;
}

function makeCallable(generator) {
	const iterator = generator();

	function random() {
		return iterator.next().value;
	}

	random[Symbol.iterator] = function * () {
		while (true) {
			yield random();
		}
	};

	return random;
}

export function consecutiveUniqueRandom(minimum, maximum) {
	return makeCallable(function * () {
		if (minimum === maximum) {
			while (true) {
				yield minimum;
			}
		}

		let previousValue = randomInteger(minimum, maximum);
		yield previousValue;

		while (true) {
			previousValue = randomIntegerWithout(minimum, maximum, previousValue);
			yield previousValue;
		}
	});
}

export function exhaustiveUniqueRandom(minimum, maximum) {
	return makeCallable(function * () {
		if (minimum === maximum) {
			while (true) {
				yield minimum;
			}
		}

		let unconsumedValues = [...range(minimum, maximum)];

		while (true) {
			while (unconsumedValues.length > 1) {
				yield unconsumedValues.splice(
					randomInteger(0, unconsumedValues.length - 1),
					1,
				)[0];
			}

			const [previousValue] = unconsumedValues;

			yield previousValue;

			unconsumedValues = [...range(minimum, maximum)];

			yield unconsumedValues.splice(
				randomIntegerWithout(0, unconsumedValues.length - 1, previousValue - minimum),
				1,
			)[0];
		}
	});
}
