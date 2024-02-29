function * range(minimum, maximum) {
	for (let number = minimum; number <= maximum; number++) {
		yield number;
	}
}

// Mutates the input function
function withIteratorShortcut(function_) {
	function_[Symbol.iterator] = function * () {
		while (true) {
			yield function_();
		}
	};

	return function_;
}

export function exhaustiveUniqueRandom(minimum, maximum) {
	let unconsumedValues = [...range(minimum, maximum)];

	return withIteratorShortcut(function random() {
		if (unconsumedValues.length == 0) {
			unconsumedValues = [...range(minimum, maximum)];
		}

		return unconsumedValues.splice(
			// https://github.com/sindresorhus/random-item/blob/b832d9332044f2d4f223731dc97534efd258b441/index.js#L6C9-L6C57
			Math.floor(Math.random() * unconsumedValues.length),
			1,
		)
	});
}

export function consecutiveUniqueRandom(minimum, maximum) {
	let previousValue;

	return withIteratorShortcut(function random() {
		const number = Math.floor(
			(Math.random() * (maximum - minimum + 1)) + minimum,
		);

		previousValue = (number === previousValue && minimum !== maximum) ? random() : number;

		return previousValue;
	});
}
