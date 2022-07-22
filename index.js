function filledSet(minimum, maximum) {
	const set = new Set();
	for (let i = minimum; i < maximum + 1; i++) {
		set.add(i);
	}

	return set;
}

export default function uniqueRandom(minimum, maximum, options) {
	const defaultSet = filledSet(minimum, maximum);
	let toExtract = new Set(defaultSet);
	let previousValue;

	return function random() {
		const number = Math.floor(
			(Math.random() * (maximum - minimum + 1)) + minimum
		);

		if (toExtract.size === 0) {
			toExtract = new Set(defaultSet);
		}

		if (options?.noOverlap) {
			const value = [...toExtract][Math.floor(Math.random() * toExtract.size)];
			if (previousValue === value) {
				return random();
			}

			toExtract.delete(value);
			previousValue = value;
			return value;
		}

		previousValue = number === previousValue && minimum !== maximum ? random() : number;

		return previousValue;
	};
}
