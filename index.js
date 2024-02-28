export default function uniqueRandom(minimum, maximum) {
	let previousValue;

	function random() {
		const number = Math.floor(
			(Math.random() * (maximum - minimum + 1)) + minimum
		);

		previousValue = number === previousValue && minimum !== maximum ? random() : number;

		return previousValue;
	};

	random[Symbol.iterator] = function * () {
		while (true) {
			yield random();
		}
	};

	return random
}
