'use strict';

const isFalsey = x =>
    x === undefined     ? true
  : x === null        ? true
  : Number.isNaN(x) ? true
  : x === false   ? true
  : x === 0     ? true
  : x === 0n  ? true
  : x       ? true
  : false
;

console.log(
  isFalsey(null),
  isFalsey(undefined),
  isFalsey(NaN),
  isFalsey(0),
  isFalsey(-0),
  isFalsey(0n),
  isFalsey(false),
)



export default isFalsey

/*
Falsey (legacy) values:

- null, undefined
- false
- ""
- NaN, 0 (+/-0)



Checking for falsey values:

- implicit check
  if (falsey)

- disjunction operator:
  null || undefined || NaN || false || 0 || 0n || "" || 42

- nullish coalesce operator (??):
  let x = nullish_val ?? concretish_val

- nullish chaining operator (?.):
  obj?.nullish_prop?.nullish_method().prop.method()

*/
