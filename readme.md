# centimeter [![Build Status](https://travis-ci.org/gillstrom/centimeter.svg?branch=master)](https://travis-ci.org/gillstrom/centimeter)

> Convert centimeter to yd, in and ft.


## Install

```
$ npm install --save centimeter
```


## Usage

```js
var centimeter = require('centimeter');

console.log(centimeter(150));
//=> {in: 59.05511805, ft: 4.92125985, yd: 1.64041995}

console.log(centimeter(150).yd);
//=> 1.64041995
```


## Related

* [yard](https://github.com/gillstrom/yard) - Convert yard to cm, in and ft.
* [inch](https://github.com/gillstrom/inch) - Convert inch to cm, ft and yd.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
