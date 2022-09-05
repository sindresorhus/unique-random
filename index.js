function integersInRange(minimum, maximum) {
	const array = [];
	for (let index = minimum; index < maximum + 1; index++) {
		array.push(index);
	}

	return array;
}

export default function uniqueRandom(minimum, maximum, options) {
	if (options === undefined) {
		options = {};
	}

	if (options.bag) {
		const defaultArray = filledArray(minimum, maximum);
		let toExtract = [...defaultArray];
		let previousValue;

		return function random() {
			if (toExtract.length === 0) {
				toExtract = [...defaultArray];
			}

			const value = toExtract[Math.floor(Math.random() * toExtract.length)];
			if (previousValue === value) {
				return random();
			}

			toExtract = toExtract.filter(item => item !== value);
			previousValue = value;
			return value;
		};
	}

	let previousValue;

	return function random() {
		const number = Math.floor(
			(Math.random() * (maximum - minimum + 1)) + minimum
		);

		previousValue = number === previousValue && minimum !== maximum ? random() : number;

		return previousValue;
	};
}
