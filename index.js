function _exhaustive(minimum, maximum) {
	function integersInRange(minimum, maximum) {
		const array = [];
		for (let index = minimum; index < maximum + 1; index++) {
			array.push(index);
		}

		return array;
	}

	let restorer = [];
	let toExtract = integersInRange(minimum, maximum);
	let previousValue;

	return function random() {
		if (toExtract.length === 0) {
			[toExtract, restorer] = [restorer, toExtract];
		}

		const picker = Math.floor(Math.random() * toExtract.length);
		if (previousValue === toExtract[picker]) {
			return random();
		}

		previousValue = toExtract.splice(picker, 1)[0];

		restorer.push(previousValue);

		return previousValue;
	};
}

export default function uniqueRandom(minimum, maximum, {exhaustive} = {}) {
	if (exhaustive) {
		return _exhaustive(minimum, maximum);
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
