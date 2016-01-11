import test from 'ava';
import m from './';

test('centimeter', t => {
	t.is(typeof m(1), 'object');
	t.is(m(150).yd, 1.64041995);
	t.is(m(70).in, 27.55905509);
	t.is(m(50).ft, 1.64041995);
});
