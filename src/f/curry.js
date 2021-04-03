//------------------------------------------------------------------ definition
// curry :: ((a, b, ...) -> z) -> (a -> b -> ... -> z)
const curry = (f, ...acc) =>
    f.length <= acc.length
        ? f(...acc)
        : (...args) =>
            f.length <= [...acc, ...args].length
                ? f(...acc, ...args)
                : curry(f, ...acc, ...args)
;

//---------------------------------------------------------------------- export
export default curry;

// ----------------------------------------------------------------- conditions
/*
- curry accepts 1 FUNCTION
- f is an n-ary function, n > 1

*/



// ---------------------------------------------------------------------- check
/*
let sum = (a, b, c) => a + b + c;

console.log('\n',
    curry(sum)(2)(3)(4),               '\n',
    curry(sum)(2)(3,4),                '\n',
    curry(sum)(2,3,4),                 '\n',
    curry(sum)(2,3)(4),                '\n',

    curry(sum,2)(3,4),                 '\n',
    curry(sum,2)(3)(4),                '\n',

    // curry(sum)(3,5)(6)(7)(8),       '\n',
    curry(sum)(2,3,4,5,6,7),           '\n',
    curry(sum)(2,3)(4,5,6,7),          '\n',

)
*/

// ------------------------------------------------------------------------ alt

/*
const curry = f => {
    let args = [];
    a => (args = [...args, a]),
    f.length <= args.length
        ? f(...args)
        : curry(f)(...args);
};

const currying = (f, cap, ...acc) => {
    return (...args) => {
        return cap <= [...acc, ...args].length
            ? f(...([...acc, ...args].slice(0,cap)))
            : currying(f, cap, ...acc, ...args)
    }
};

let sum = (...xs) => xs.reduce((a,b) => a+b);

const cur = (f, cap) =>
    (...args) => {
        return cap <= args.length
            ? f(...args.slice(0,cap))
            : cur(f, cap)(...args)
    }

------------------------------------------------------------------------
// flex aka supercurry aka autocurry
// flex :: ((a, b, ...) -> z) -> (a -> b -> ... -> z)

const flex = (f, ...acc) =>
    f.length <= acc.length
        ? f(...acc)
        : (...args) =>
            f.length <= [...acc, ...args].length
                ? f(...acc, ...args)
                : flex(f, ...acc, ...args)
;

------------------------------------------------------------------------
flex - flexible decorator for polyadic functions

It is similar, but more flexible then currying, allowing complete freedom in how the args are supplied. It collects args until all are collected and then it calls the decorated function. It is possible to supply more args then required in which case the extra args are ignored.

Currying is strict; currying a n-ary function requires that args are supplied as n 1-tuples, that is, strictly one arg per call:

    curryied(a1)(a2)(a3)(a4)

Flex relaxes this requirement, allowing the args to be supplied as a number of k-tuples (where 1 <= k <= n).

    let flexxed = flex(quaternary);

    flexed(a1)(a2)(a3)(a4)      // 4 x 1-tuple (same as curry)
    flexed(a1, a2, a3)(a4)      // 1 x 3-tuple, 1 x 1-tuple
    flexed(a1)(a2, a3)(a4)      // 2 x 1-tuple, 1 x 2-tuple
    flexed(a1, a2)(a3, a4)      // 2 x 2-tuple
    flexed(a1, a2, a3, a4)      // 1 x 4-tuple

In other words: decorate a function in flex and call it any which way.

You can also supply some (or even all) args in the initial call to flex:

    let flexxed = flex(quaternary, a1, a2) // wrap with flex and fix two args
    flexxed(a3)(a4)                        // supplying the rest of args


------------------------------------------------------------------------
const currying = (f, ary = f.length, ...args) =>
    args.length >= ary
        ? f(...args)
        : (...brgs) => currying(f, ary, ...args, ...brgs)

let sum = (a,b,c,d) => a+b+c+d;

console.log('\n',
    curry(sum)(3,4,5,6),'\n',
    curry(sum, sum.length, 3,4,5,6),'\n',
    curry(sum, 4, 3,4,5,6),'\n',        // explicit arity given
    curry(sum, 3, 3,4,5,6),'\n',        // constraint of arity 3 useless here
    curry(sum, 3) (3,4,5),'\n',         // NaN
    curry(sum) (3,4,5) (6),'\n',
)

*/
