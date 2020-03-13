

const samples = [
    {
        id: "array: [1, 2, 3, 4]",
        actual: [1, 2, 3, 4],
        expected: true,
    },
    {
        id: "array nested: [1, [2, [3]]]",
        actual: [1, [2, [3]]],
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
