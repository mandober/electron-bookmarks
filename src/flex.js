'use strict';

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

export default flex;


/*

flex - flexible decorator for polyadic functions.

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

*/
