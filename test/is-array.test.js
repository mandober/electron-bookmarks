'use strict';

import assert from 'assert'
import is_array from '../src/predicates/is-array.js'

// isArrayTest
(function is_array_test() {
    let samples = [
        {
            id: "nested1",
            actual: [1, 2, 3, [4, 5, [6]]],
            expected: true,
        },
        {
            id: "nested2",
            actual: [[1, 2], [3, [4, 5, [6, 7]]]],
            expected: true,
        },
        {
            id: "nested3",
            actual: [[[1, 2]], [[3], 4, [5], 6], 7],
            expected: true,
        },
        {
            id: "linked",
            actual: [1, [2, [3, [4, [5, [6, [7]]]]]]],
            expected: true,
        },
        {
            id: "pairs",
            actual: [[1, 2], [3, 4], [5, 6]],
            expected: true,
        },
        {
            id: "empty array",
            actual: [],
            expected: true,
        },
        {
            id: "empty array in empty array",
            actual: [[]],
            expected: true,
        },
        {
            id: "sparse1",
            actual: [[null, undefined, 3], 4, [void 0, 0, false,], [5, undefined], 5],
            expected: true,
        },
        {
            id: "sparse2",
            actual: [[, , 3], 4, [, , ,], [5,], 5],
            expected: true,
        },
        {
            id: "integer",
            actual: 123,
            expected: false,
        },
        {
            id: "string",
            actual: "abcd",
            expected: false,
        },
        {
            id: "boolean",
            actual: false,
            expected: false,
        },
        {
            id: "symbol",
            actual: Symbol('test symbol'),
            expected: false,
        },
        {
            id: "undefined",
            actual: void 0,
            expected: false,
        },
        {
            id: "null",
            actual: null,
            expected: false,
        },
        {
            id: "pojo",
            actual: { a: 1 },
            expected: false,
        },
        {
            id: "empty pojo",
            actual: {},
            expected: false,
        },
        {
            id: "empty pojo in empty array",
            actual: [{}],
            expected: true,
        }
    ];

    for (let obj of samples) {
        // console.log(obj.id);
        assert.equal(
            is_array(obj.actual),
            obj.expected
        );
    }
})();
