function generateUniqueRandomNumber(min, max) {
	const range = max - min + 1;
	const shuffledArray = Array.from({ length: range }, (_, index) => index + min)
		.sort(() => Math.random() - 0.5);

	let currentIndex = 0;
	return function () {
		return shuffledArray[currentIndex++];
	};
}

export default function uniqueRandom(minimum, maximum) {
	return function random() {
		const number = generateUniqueRandomNumber(minimum, maximum);
		return number;
	};
}
