// ---------------------------------------------------------------------- about
/*

The abstract operation IsStringPrefix takes arguments 
p (a String) and q (a String). 

It determines if p is a prefix of q. 

It performs the following steps when called:
- Assert: Type(p) is String.
- Assert: Type(q) is String.
- If q can be the string-concatenation of p and some
  other String r, return true. Otherwise, return false.

Any String is a prefix of itself, because r may be the empty String.

Prefix is the inclusion relation, and like with a subset,
any string is a prefix of itself.

assert
asserts an invariant condition
make explicit algorithmic invariants that would otherwise be implicit

-- True if the first list is a prefix of the second
isPrefixOf :: (Eq a) => [a] -> [a] -> Bool
isPrefixOf [] _          =  True
isPrefixOf _  []         =  False
isPrefixOf (x:xs) (y:ys) =  x == y && isPrefixOf xs ys

*/
// --------------------------------------------------------------------- import
import curry from '../f/curry.js'

// ----------------------------------------------------------------- definition
const prefix = curry(([x,...xs]) => ([y,...ys]) =>
    x === undefined
        ? true
        : y === undefined
            ? false
            : x === y && prefix(xs) (ys)

);

// --------------------------------------------------------------------- export


console.log('\n',
    prefix ('') ('')                        , '\n',
    prefix ('function') ('functions')        , '\n',
    prefix('Function')('FunctionAsync')     , '\n',
    prefix('Function')('AsyncFunction')     , '\n',
    '\n',
    // empty set, like any, is its own subset
    prefix ([]) ([])          , '\n',
    prefix ([1]) ([])          , '\n',
    prefix ([]) ([1])          , '\n',
    '\n',

    prefix ([1]) ([1])        , '\n',
    prefix ([1]) ([2])        , '\n',
    prefix ([1]) ([2,1])      , '\n',
    '\n',
    prefix ([1,2,3,4]) ([1,2,3,4,5,6])      , '\n',
    prefix ([1,2,3,4]) ([1,2,3])      , '\n',

)
