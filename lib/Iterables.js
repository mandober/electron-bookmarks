/* Data.List */

import foldl from '../src/foldl.js'


// head :: [a] -> a
const head = ([x, ..._]) => x

// tail :: [a] -> [a]
const tail = ([_, ...xs]) => xs

// last :: [a] -> a
const last = ([x, ...xs]) =>
    x === undefined
        ? null
        : xs[xs.length-1]

// init :: [a] -> [a]
const init = ([x, ...xs]) =>
    x === undefined
        ? []
        : [x, ...xs.slice(0, xs.length-1)]



// cons :: a -> [a] -> [a]
const $$ = x => ([...xs]) => [x, ...xs]

// append :: [a] -> [a] -> [a]
const $$$ = ([...ys]) => ([...xs]) => [...ys, ...xs]


// (+) :: (Num a =>) [a] -> a
// (+) = foldr '+' 0
const sum     = foldl ((acc, x) => acc + x) (0);

// (*) :: (Num a =>) [a] -> a
// (*) = foldr '*' 1
const product = foldl ((acc, x) => acc * x) (1);



export {
    head, tail,
    init, last,
    $$, $$$,
    sum, product,
}
