'use strict';
module.exports = (minimumValue, maximumValue) => {
	let prev;
	return function random() {
		const num = Math.floor(
			(Math.random() * (maximumValue - minimumValue + 1)) + minimumValue
		);
		prev = num === prev && minimumValue !== maximumValue ? random() : num;
		return prev;
	};
};
