// foldr :: (a -> b -> b) -> b -> [a] -> b

const foldr = f => acc => ([x, ...xs]) =>
    x === undefined
        ? acc
        : f (x, foldr(f)(acc)(xs))

export default foldr


const foldr_nc = (reducer, acc, [x, ...xs]) =>
    x === undefined
        ? acc
        : reducer(x, foldr_nc(reducer, acc, xs))
