'use strict';
module.exports = (min, max) => {
	let prev;
	return function rand() {
		const num = Math.floor((Math.random() * (max - min + 1)) + min);
		prev = (num === prev && min !== max) ? rand() : num;
		return prev;
	};
};
