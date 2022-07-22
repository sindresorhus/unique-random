function filledArray(minimum, maximum) {
	const array = [];
	for (let i = minimum; i < maximum + 1; i++) {
		array.push(i);
	}

	return array;
}

export default function uniqueRandom(minimum, maximum, options) {
	const defaultArray = filledArray(minimum, maximum);
	let toExtract = [...defaultArray];
	let previousValue;

	return function random() {
		const number = Math.floor(
			(Math.random() * (maximum - minimum + 1)) + minimum
		);

		if (toExtract.length === 0) {
			toExtract = [...defaultArray];
		}

		if (options?.noOverlap) {
			const value = toExtract[Math.floor(Math.random() * toExtract.length)];
			if (previousValue === value) {
				return random();
			}

			toExtract = toExtract.filter(item => item !== value);
			previousValue = value;
			return value;
		}

		previousValue = number === previousValue && minimum !== maximum ? random() : number;

		return previousValue;
	};
}
