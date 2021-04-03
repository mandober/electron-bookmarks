/*
const compose = flip(foldr(apply));

const compose3 = (...gs) => x => {
    const [f, ...fs] = gs;
        f === undefined
            ? x
            : f (compose3(...fs)) (f(x))
}

const foldr = (f, e, [x,...xs]) =>
    x === undefined
        ? e
        : f(x, foldr(f, e, xs))

const compose = (...fs) => (...args) =>
  foldr((f, acc) => [acc.call(null, ...f)], args)[0];

compose :: (b -> c) -> (a -> b) -> a -> c
compose :: ((a->b), (b->c), ..., (y->z)) -> a->z


const pipe = foldl(flip(apply));

const compose3 = (...fs) => x => foldr ( (z,f)=>f(z), x, fs)

compose takes WHAT?
- a list of fns  : compose(h,g,f)   (x) ~~> h(g(f(x)))
- an array of fns: compose([h,g,f]) (x) ~~> h(g(f(x)))

compose2 :: (b -> c) -> (a -> b) -> (a -> c)
is a composition of 2 unary functions:
    g :: b -> c
    f :: a -> b
that returns a new function
    g . f :: a -> c

composeN :: (y -> z) -> ... -> (b -> c) -> (a -> b) -> (a -> z)
composeN :: ((a->b), (b->c), ..., (y->z)) -> a->z
pipeN    :: a -> (a->b) -> (b->c) -> ... -> (y -> z) -> z
*/
