'use strict';

// unique :: [a] -> [a]
const unique = ([...as]) => [ ...new Set(as) ];

// union :: [a] -> [a] -> [a]
const union = ([...as]) => ([...bs]) =>
   [ ...new Set([...as,...bs]) ];

// intersection :: [a] -> [a] -> [a]
const intersection = ([...as]) => ([...bs]) =>
    [ ...new Set([...as].filter(x => [...bs].includes(x))) ];

// complement :: [a] -> [a] -> [a]
const complement = ([...as]) => ([...bs]) =>
    as.filter(x => ! bs.includes(x));



let s1, s2
console.log(
    '\n',
    (s1 = new Set('abcd')), '\n',
    (s2 = new Set('cdefg')), '\n',
    union(s1)(s2), '\n',
    intersection(s1)(s2), '\n',
    complement(s1)(s2), '\n',
    complement(s2)(s1), '\n',

    unique([1,1,2,1,2,3,4,1,2]), '\n',
)
