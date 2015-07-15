'use strict';
var test = require('ava');
var centimeter = require('./');

test('centimeter', function (t) {
	t.plan(4);

	t.assert(typeof centimeter(1) === 'object');
	t.assert(centimeter(150).yd === 1.64041995);
	t.assert(centimeter(70).in === 27.55905509);
	t.assert(centimeter(50).ft === 1.64041995);
});
