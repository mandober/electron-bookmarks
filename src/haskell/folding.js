'use strict';
/*
Functions on lists in terms of folding
======================================
Fold family of functions encapsulate recursion pattern of list processing.
All functions on lists can be defined in terms of foldr (including foldl).
*/

// ============================================================================
// foldl :: Foldable t => (b -> a -> b) -> b -> t a -> b
const foldl = f => acc => ([x, ...xs]) =>
    x === undefined
        ? acc
        : foldl (f) (f(acc, x)) (xs)
;

// foldr :: Foldable t => (a -> b -> b) -> b -> t a -> b
const foldr = f => acc => ([x, ...xs]) =>
    x === undefined
        ? acc
        : f (x, foldr(f)(acc)(xs))
;

// ============================================================================
// point-free definitions

// (+) :: (Num a =>) [a] -> a
// (+) = foldr (+) 0
const sum     = foldl ((acc, x) => acc + x) (0);

// (*) :: (Num a =>) [a] -> a
// (*) = foldr (*) 1
const product = foldr ((acc, x) => acc * x) (1);

// and :: [Bool] -> Bool
// and = foldr and True
const and     = foldl ((acc, x) => acc && x) (true);

// or :: [Bool] -> Bool
// or = foldr or False
const or      = foldr ((acc, x) => acc || x) (false);

// ============================================================================
// (++) :: [a] -> [a] -> [a]
// (++ ys) = foldr (:) ys
const append = xs => ys => foldr ((x, acc) => [x, ...acc]) (ys) (xs)
const appendl = xs => ys => foldl ((acc, x) => [...acc, x]) (ys) (xs)

// reverse :: [a] -> [a]
// reverse = foldr (\x xs -> xs ++ [x]) []
const reversel  = foldl ((acc, x) => [x, ...acc]) ([]);
const reverse = foldr ((x, acc) => [...acc, x]) ([]);

// length :: [a] -> Int
// length = foldr (\x n -> 1 + n) 0
const lenl  = foldl ((acc, _) => acc + 1) (0)
const len = foldr ((_, acc) => 1 + acc) (0)

// ============================================================================
// map :: (a -> b) -> [a] -> [b]
// map f = foldr (\x xs -> f x : xs) []
const map = f => foldr ((x,acc) => [f(x), ...acc]) ([]);

// filter :: (a -> Bool) -> [a] -> [a]
// filter p = foldr (\x xs -> if p x then x : xs else xs) []
const filter = p => foldr ((x, xs) => p(x) ? [x, ...xs] : [...xs] ) ([]);


// ============================================================================

console.log(
    '\n',
    sum([3,5,7]),
    '\n',
    product([3,5,7]),
    '\n',
    and([true,true,true]),
    '\n',
    or([false,true,false]),

    '\n',
    append ([5,6]) ([7,8,9]),
    '\n',
    appendl ([5,6]) ([7,8,9]) ,

    '\n',
    reversel([5,6,7,8,9]),
    '\n',
    reverse([5,6,7,8,9]),
    '\n',
    lenl([5,6,7,8,9]),
    '\n',
    len([5,6,7,8,9]),
    '\n',
    map(a => a + 2)([5,6,7,8,9]),
    '\n',
    filter(a => 5 < a && a < 9)([5,6,7,8,9]),

)






// ============================================================================

/*
In Haskell, folding a list means replacing the [] with accumulator and replacing every cons (:) with the function:

foldl (+) 0 [0,1,2,3] ~~>
0 : 1 : 2 : 3 : []
  +   +   +   + acc

The two basic fold functions, foldl and foldr, work similarly except foldl takes a binary "reducer" function that takes its two args as `f acc x` which is (b -> a -> b) in the foldl signature.

foldl :: (b -> a -> b) -> b -> [a] -> b
foldl f acc [] = acc
foldl f acc (x : xs) = f x (foldl f acc xs)

The foldr's reducer takes the two args as `f x acc` which is  (a -> b -> b) in the folr signature.

foldr :: (a -> b -> b) -> b -> [a] -> b
foldr f acc [] = acc
foldr f acc (x : xs) = f x (foldr f acc xs)

In both cases, `x` is the current element of the list, but foldl iterates over the list in order (from 0th to the last element), while foldr iterates over the list in reverse.
*/
