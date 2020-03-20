'use strict';

const isNullish = x => x === null || x === undefined;

export default isNullish;


/*
2 nullish values: null, undefined
7 falsey values: null, undefined, 0,-0,+0,NaN, ""

Checking for nullish values:

- narrow explicit check for null and undefined
  if (x === null || x === undefines)

- broad implicit check for any falsey value
  if (x)

- disjunction operator:
  nullish || concretish

- nullish coalesce operator (??):
  let x = nullish_val ?? concretish_val

- optional chaining operator (?.):
  obj . prop ?. nullish_prop ?. nullish_method() . method()

*/
