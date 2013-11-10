/*!
	unique-random
	Generate random numbers that are consecutively unique
	https://github.com/sindresorhus/unique-random
	by Sindre Sorhus
	MIT License
*/
(function () {
	'use strict';

	function uniqueRandom(min, max) {
		var prev;
		return function rand() {
			var num = Math.floor(Math.random() * (max - min + 1) + min);
			return prev = num === prev && min !== max ? rand() : num;
		};
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = uniqueRandom;
	} else {
		window.uniqueRandom = uniqueRandom;
	}
})();
