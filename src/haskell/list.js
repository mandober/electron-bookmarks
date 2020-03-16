// head :: [a] -> a
const head = ([x, ..._]) => x

// tail :: [a] -> [a]
const tail = ([_, ...xs]) => xs

// init :: [a] -> [a]
const init = ([x, ...xs]) =>
    x === undefined
        ? []
        : [x, ...xs.slice(0, xs.length-1)]
;

// last :: [a] -> a
const last = ([x, ...xs]) =>
    x === undefined
        ? null
        : xs[xs.length-1]
;

// cons :: a -> [a] -> [a]
const cons = y => ([...xs]) => [y, ...xs]

// append :: [a] -> [a] -> [a]
const append = ([...ys]) => ([...xs]) => [...ys, ...xs]


export {head, tail, init, last, cons, append}



/*
console.log(
    '\n',
    cons(6)(cons(7)(cons(8)([]))), '\n',
    append([1,2])([3,4,5]), '\n',
    head ( [3,4,5,6] ), ':',
    tail ( [3,4,5,6] ), '\n',
    init ( [3,4,5,6] ), ':',
    last ( [3,4,5,6] ), '\n',
)
*/
