const usedNumbers = new Set();
function generateUniqueRandomNumber(min, max) {
	let randomNum;
	do {
		randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
	} while (usedNumbers.has(randomNum));

	usedNumbers.add(randomNum);

	return randomNum;
}

export default function uniqueRandom(minimum, maximum) {
	return function giveRandomNumber() {
    		const number = generateUniqueRandomNumber(minimum, maximum);
		return number;
	};
}
