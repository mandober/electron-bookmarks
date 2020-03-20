# Testing

- Mocha as the test framework
- Chai as assertion library



Install Mocha as a project's dev dependency

```bash
# Install Mocha testing framework
npm i --save-dev mocha

# Install Chai assertion library
npm i --save-dev chai
```

Mocha automatically looks for tests inside the `test` dir of your project.

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
