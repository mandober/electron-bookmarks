'use strict';

import assert from 'assert'
import is_numeric from '../src/is-numeric.js'

assert.equal(is_numeric('42'), true);
assert.equal(is_numeric(42), true);
