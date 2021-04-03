const isEmpty = x =>
    x === undefined ||
    x === null      ||
    x === ''        ||
    Number.isNaN(x)
        ? true
        : false
;

const isNonempty = x => 
    x === undefined
        ? false
        : x === null
            ? false
            : Number.isNaN(x)
                ? false
                : x === ''
                    ? false
                    : true
;



let sparse2 = [
    0,
    -0, 
    +0, 
    false,
    2,
    ...Array(5), 
    NaN, 
    '', 
    -Infinity,
    [], 
    a => a,
    ...Array(3), 
    null,
    {}, 
    undefined,
    Infinity
];
// [0,1,7,11]


console.log('\n',
    // 'map(isEmpty):', sparse2.map(isEmpty), '\n',
    // 'map(Boolean):', sparse2.map(Boolean), '\n',

    'filter(Boolean):', sparse2.filter(Boolean), '\n',
    // [ 2, -Infinity, [], {}, Infinity ]

    'filter(isEmpty):', sparse2.filter(isEmpty), '\n',
    'filter(isNonempty):', sparse2.filter(isNonempty), '\n',
    'filter(x=>!!x):', sparse2.filter(x=>!!x), '\n',
    'filter(x => x):', sparse2.filter(x=>x), '\n',

)
