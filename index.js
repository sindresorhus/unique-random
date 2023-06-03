const usedNumbers = new Set();
function generateUniqueRandomNumber(min, max) {
	let randomNumber;
	do {
		randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	} while (usedNumbers.has(randomNumber));
	
	usedNumbers.add(randomNumber);
	return randomNumber;
}

export default function uniqueRandom(minimum, maximum) {
	return function () {
		const number = generateUniqueRandomNumber(minimum, maximum);
		return number;
	};
}
