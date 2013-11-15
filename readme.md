# unique-random [![Build Status](https://secure.travis-ci.org/sindresorhus/unique-random.png?branch=master)](http://travis-ci.org/sindresorhus/unique-random)

> Generate random numbers that are consecutively unique.

Useful for eg. slideshows where you don't want to have the same slide twice in a row.


## Install

Download [manually](https://github.com/sindresorhus/unique-random/releases) or with a package-manager.

#### [npm](https://npmjs.org/package/unique-random)

```
npm install --save unique-random
```

#### [Bower](http://bower.io)

```
bower install --save unique-random
```

#### [Component](https://github.com/component/component)

```
component install sindresorhus/unique-random
```


## Examples

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

MIT © [Sindre Sorhus](http://sindresorhus.com)
