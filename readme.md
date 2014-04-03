# unique-random [![Build Status](https://travis-ci.org/sindresorhus/unique-random.svg?branch=master)](https://travis-ci.org/sindresorhus/unique-random)

> Generate random numbers that are consecutively unique.

Useful for eg. slideshows where you don't want to have the same slide twice in a row.


## Install

Download [manually](https://github.com/sindresorhus/unique-random/releases) or with a package-manager.

```bash
$ npm install --save unique-random
```

```bash
$ bower install --save unique-random
```

```bash
$ component install sindresorhus/unique-random
```


## Usage

Generate a random number between 1 and 10.

### Node.js

```js
var rand = require('unique-random')(1, 10);
console.log(rand(), rand(), rand());
//=> 5 2 6
```

### Bower

```html
<script src="bower_components/unique-random/unique-random.js"></script>
```

```js
var rand = uniqueRandom(1, 10);
console.log(rand(), rand(), rand());
//=> 5 2 6
```


## API

### uniqueRandom(*min*, *max*)

Returns a function which when called will return a random number that's never the same as the previous number.


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
