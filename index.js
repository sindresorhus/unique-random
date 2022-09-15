function integersInRange(minimum, maximum) {
	const array = [];
	for (let index = minimum; index < maximum + 1; index++) {
		array.push(index);
	}

	return array;
}

function uniqueRandomExhaustive(minimum, maximum) {
	let pickedValues = [];
	let valuesToPick = integersInRange(minimum, maximum);
	let previousValue;

	return function random() {
		if (valuesToPick.length === 0) {
			[valuesToPick, pickedValues] = [pickedValues, valuesToPick];
		}

		const picker = Math.floor(Math.random() * valuesToPick.length);
		if (previousValue === valuesToPick[picker]) {
			return random();
		}

		[previousValue] = valuesToPick.splice(picker, 1);

		pickedValues.push(previousValue);

		return previousValue;
	};
}

export default function uniqueRandom(minimum, maximum, {exhaustive} = {}) {
	if (exhaustive) {
		return uniqueRandomExhaustive(minimum, maximum);
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
