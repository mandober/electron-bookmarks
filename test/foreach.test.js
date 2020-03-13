'use strict';

import assert from 'assert'
import forEach from '../src/foreach.js'

assert.doesNotThrow( () => {
    forEach(x => console.log(x))([1, 2, 3])
});

assert.doesNotThrow( () => {
    forEach(console.log)([1, 2, 3])
});
