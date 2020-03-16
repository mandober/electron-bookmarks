'use strict';

const union = (a, b) =>
    [...new Set(a.concat(b))].sort();

const intersection = (a, b) =>
    [...new Set(a.filter(el => b.includes(el)))].sort();

const complement = (a, b) =>
    a.filter(el => !b.includes(el));


console.log(
    new Set('abcd')
)
