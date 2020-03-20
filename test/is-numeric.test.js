'use strict';

import assert from 'assert'
import isNumeric from '../src/predicates/is-numeric.js'

assert.equal(isNumeric('42'), true);
assert.equal(isNumeric(42), true);
