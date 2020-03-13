'use strict';

import assert from 'assert';
import flex from '../src/flex.js';

// helper quaternary function
let sum = (a, b, c, d) => a + b + c + d;

assert.strictEqual( flex(sum)(3)(5)(7)(9), 24 );
assert.strictEqual( flex(sum)(3)(5)(7, 9), 24 );
assert.strictEqual( flex(sum)(3)(5, 7)(9), 24 );
assert.strictEqual( flex(sum)(3, 5)(7, 9), 24 );
assert.strictEqual( flex(sum)(3)(5, 7, 9), 24 );
assert.strictEqual( flex(sum)(3, 5, 7)(9), 24 );
assert.strictEqual( flex(sum)(3, 5, 7, 9), 24 );  // defeating the purpose

// fix some args while decorating
assert.strictEqual( flex(sum, 3, 5, 7)(9), 24 );
assert.strictEqual( flex(sum, 3, 5)(7)(9), 24 );
assert.strictEqual( flex(sum, 3)(5)(7)(9), 24 );
// ...
assert.strictEqual( flex(sum, 3, 5, 7, 9), 24 );  // futile decoration

// empty calls do not contribute args
assert.strictEqual( flex(sum)(3)()(5)()(7)()(9), 24 );
