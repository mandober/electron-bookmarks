'use strict';

import assert from 'assert'
import isNullish from '../src/predicates/is-nullish.js'

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

(function isNullishTest() {
    for (let obj of samples) {
        // console.log(obj.id);
        assert.equal(isNullish(obj.actual), obj.expected);
    }
})();
