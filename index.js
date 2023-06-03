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
	// let previousValue;

	return function random() {
    	const number = generateUniqueRandomNumber(minimum, maximum);
		// const number = Math.floor(
		// 	(Math.random() * (maximum - minimum + 1)) + minimum
		// );
		// previousValue = number === previousValue && minimum !== maximum ? random() : number;
		// return previousValue;
		return number;
	};
}
