// foldl :: (b -> a -> b) -> b -> [a] -> b

const foldl = f => acc => ([x, ...xs]) =>
    x === undefined
        ? acc
        : foldl (f) (f(acc)(x)) (xs)

export default foldl

const foldr = f => acc => ([x, ...xs]) =>
    x === undefined
        ? acc
        : f (x, foldr(f)(acc)(xs))



const foldl_nc = (reducer, acc, [x, ...xs]) =>
    x === undefined
        ? acc
        : foldl_nc(reducer, reducer(acc, x), xs)


const foldr_nc = (reducer, acc, [x, ...xs]) =>
    x === undefined
        ? acc
        : reducer(x, foldr_nc(reducer, acc, xs))


const arr = [1,2,1,2,3]


console.log(
    '\n',

    //foldl( (a, b)=>[...a,b] ) ([1]) ( ['a','b','c'] ), '\n',
    //foldr( (a, b) => [...a, b] ) ([]) ( ['a','b','c'] ), '\n',
    foldl_nc((acc, el) => acc.includes(el) ? acc : [...acc, el], [], [1,2,1,1,2,1,1])
    , '\n',

    foldr_nc((el, acc) => acc.includes(el) ? acc : [el,...acc], []
    , [1,2,1,2,1,2,1,2,1,2,2,1,2])
    , '\n'
    , '\n',

    4 in [4,4,4],               '\n',
    4 in [0,1,2,3,5],           '\n',
    'length' in [1],    '\n',
)
