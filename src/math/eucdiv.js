// ---------------------------------------------------------------------- about
/*
Euclidean division: a = bq + r     for b != 0   ∧    0 <= r < |b|

remainder r is always positive
a is the dividend, b is the divisor,
q is the quotient, r is the remainder

Euclidean division seems straightforward, but it's somewhat tricky for negative integers considering that the remainder must always be positive, 0 <= r < |b|

-9 / 4 = (-3, 3)
-9 / 4 != (-2, -1)

*/

// --------------------------------------------------------------------- import
import curry from '../f/curry.js'

// --------------------------------------------------------------------- define
const eucdiv = curry((a, b) =>
    b === 0 
        ? Infinity
        : [Math.trunc(a/b), a - b*Math.trunc(a/b)]
);

// --------------------------------------------------------------------- helper

// --------------------------------------------------------------------- export
export default eucdiv


// ------------------------------------------------------------------------ alt


// ---------------------------------------------------------------------- check
console.log('\n',
    eucdiv(7, 3), '\n',
    eucdiv(7, -3), '\n',
    eucdiv(-7, 3), '\n',
    eucdiv(-7, -3), '\n',
)
