/*
PARSER COMBINATORS in JS
========================

https://www.youtube.com/watch?v=1axJDmK_pnE&list=PLP29wDx6QmW5yfO1LAgO8kU3aQEj8SIrU&index=2
*/

import {clip,panic} from './utils.js'

// parser that eats strings
// s = str to match
const str = needle => hay =>
    hay.startsWith (needle)
        ? needle
        : panic(`No ${needle} in ${clip (hay)}`)
;

// run
const run = parser => hay => parser (hay)

// usage: feed a needle to the parser
// const parser = hay => str ('abra') (hay)
const parser = str ('abra')

console.log(
    run (parser) ('abracadabra')

)
