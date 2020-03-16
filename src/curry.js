'use strict';


/*
const curry = f => {
    let args = [];
    a => (args = [...args, a]),
    f.length <= args.length
        ? f(...args)
        : curry(f)(...args);
};

export default curry;




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
;


console.log(
    currying(sum,2)(3,4,5,6,7),
    currying(sum,2)(7)(5),
    // currying(sum,2)(3)(5)(6)(7)(8),

    cur(sum, 2)(3,4,5,6,7),
    // cur(sum, 2)(3)(8),

)
*/
