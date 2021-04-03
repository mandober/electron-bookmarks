# Testing with Mocha and Chai

*Mocha* as the test harness, *Chai* as the assertion library.

```bash
# install Mocha as dev dep
npm i --save-dev mocha

# install Chai assertion library as dev dep
npm i --save-dev chai

# cd to root and fire up mocha to run tests
mocha
```

Mocha looks for test files in the `test` dir in the project's root dir:    
`test/**/*.test.js`


Chai provides the following assertion styles:


1. Assert style

```js
import assert from 'chai'
// let assert = require('chai').assert;
let numbers = [1, 2, 3, 4, 5];
assert.isArray(numbers, 'is array of numbers');
assert.include(numbers, 2, 'array contains 2');
assert.lengthOf(numbers, 5, 'array contains 5 numbers');
```

2. Expect style

```js
import expect from 'chai'
// let expect = require('chai').expect;
let numbers = [1, 2, 3, 4, 5];
expect(numbers).to.be.an('array').that.includes(2);
expect(numbers).to.have.lengthOf(5);
```

3. Should style

```js
import should from 'chai'
// let should = require('chai').should();
let numbers = [1, 2, 3, 4, 5];
numbers.should.be.an('array').that.includes(2);
numbers.should.have.lengthOf(5);
```


## Alternative testing frameworks and assertion libs

Test frameworks:
- [Mocha](https://mochajs.org/)
- [Jest](https://jestjs.io/)
- [Jasmine](https://jasmine.github.io/)
- [QUnit](https://qunitjs.com/)
- [Karma](https://karma-runner.github.io/)
- [Cypress](https://www.cypress.io/)

Assertion Libraries:
- [assert (Node)](https://nodejs.org/api/assert.html)
- [Chai](http://www.chaijs.com/)
- [Expect.js](https://github.com/mjackson/expect)
- [Should.js](https://shouldjs.github.io/)
