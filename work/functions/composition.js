import foldr from './foldr.js'
import curry from './curry.js'

/**
 * compose is RTL function composition: g . f (x) = g(f(x))
 *
 * compose2 :: (b -> c) -> (a -> b) -> a -> c
 * 
 * compose :: ((a->b), (b->c), ..., (y->z)) -> a->z
 *
 */
const compose = (...fs) => z => foldr( (f,x)=>f(x) , z , fs )

export default compose


const compose2 = (g, f) => x => g(f(x));



let sum = (a, b, c, d) => a + b + c + d;

// fns :: a -> a
let fns = [
    x => x + 1,
    x => x + 3,
    x => x * 2,
    x => x + 10,
]

// id :: a -> a
const id = x => x;

// cons :: a -> [a] -> [a]
const cons = x => ([...xs]) => [x,...xs];

// map f = foldr ((:) . f) []
const map = f => xs => curry(foldr) (compose2(cons, f)) ([]) (xs)

console.log(
    ' ~~~~~~~~~~~~~~~~~~~~~~', '\n',
    curry(sum)(2,3,44)(5),'\n',
    curry(sum)(2,3,8,5),'\n',

    compose(...fns) (1), '\n',

    //cons(0, [1,2,3]), '\n',
    cons (0) ([1,2,3]), '\n',

    //map(id, [1,2,3]), '\n',
    curry(map) (x => x + 3) ([1,2,3]), '\n',

    '~~~~~~~~~~~~~~~~~~~~~~'
)
