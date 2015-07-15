'use strict';
module.exports = function (cm) {
	if (typeof cm !== 'number') {
		throw new TypeError('Expected a number');
	}

	return {
		in: cm * 0.393700787,
		ft: cm * 0.032808399,
		yd: cm * 0.010936133
	};
};
