/*global describe, it */
'use strict';
var assert = require('assert');
var uniqueRandom = require('./unique-random')(1, 10);

describe('uniqueRandom', function () {
	it('should generate a random number from min to max without the same number in a row', function () {
		var count = 1000;
		var fail = false;
		var current;
		var prev;

		while (--count > 0) {
			current = uniqueRandom();

			if (current === prev || current > 10 || current < 1) {
				fail = true;
			}

			prev = current;
		}

		assert(!fail);
	});
});
