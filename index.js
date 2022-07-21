const getMaxNumbers = (minimum, maximum) => maximum - minimum + 1;

export default function uniqueRandom(minimum, maximum, options) {
	const extracted = new Set();
	let previousValue;

	return function random() {
		const number = Math.floor(
			(Math.random() * (maximum - minimum + 1)) + minimum
		);

		if (extracted.size === getMaxNumbers(minimum, maximum)) {
			extracted.clear();
		}

		if (options?.noOverlap) {
			previousValue = ((extracted.has(number) || previousValue === number) && random()) || (extracted.add(number) && number);
			return previousValue;
		}

		previousValue = number === previousValue && minimum !== maximum ? random() : number;

		return previousValue;
	};
}
