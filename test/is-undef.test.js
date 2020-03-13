'use strict';

import assert from 'assert'
import is_undef from '../src/is-undef.js'

let samples = [
    {
        id: 'null',
        actual: null,
        expected: true,
    },
    {
        id: 'undefined',
        actual: undefined,
        expected: true,
    },
    {
        id: '0',
        actual: 0,
        expected: false,
    },
    {
        id: '[]',
        actual: [],
        expected: false,
    },
    {
        id: '{}',
        actual: {},
        expected: false,
    },
];

(function is_undef_test() {
    for (let obj of samples) {
        // console.log(obj.id);
        assert.equal(is_undef(obj.actual), obj.expected);
    }
})();
