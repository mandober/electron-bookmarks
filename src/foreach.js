'use strict';

// similar to map but only execs f on each element for side-effects
const forEach = f => ([x, ...xs]) => {
    x === undefined
        ? undefined
        : (f(x), forEach(f)(xs))
};

export default forEach;
