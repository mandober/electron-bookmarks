// --------------------------------------------------------------------- import
// import curry from '../f/curry.js'

// ------------------------------------------------------------------------ api
/**
 * Fold a list from the right side.
 * 
 * foldr :: (a -> b -> b) -> b -> [a] -> b
 * 
 * @param f (a -> b -> b)  Binary fn does: b' = f(a, b)
 * @param b   b              Initial value of type b, same as f's return type
 * @param as  [a]            An array, [a]
 * @return    b              The last b' processed by f
 * 
 */
const foldr = <A, B>
    ( f: (x: A, e: B) => B
    , e : B
    , [...xs] : [A]
    ) : B =>
    foldrc (f) (e) (xs)
;

What I Wish I Knew When Learning Haskell - Stephen Diehl v.2.5

// ----------------------------------------------------------------- definition
// foldr :: (a -> b -> b) -> b -> [a] -> b
const foldrc = f => e => ([x,...xs]) =>
    x === undefined
        ? e
        : f (x) (foldrc (f) (e) (xs))
;

// --------------------------------------------------------------------- export
export default foldr;


// ---------------------------------------------------------------------- check
/*
console.log(
    '\n',
    foldr( (a, b) => a**b ) (2) ( [2,4] ), '\n',
    foldr( (a, b) => a**b ,  2  , [2,4] ), '\n',
    foldr(a => b  => a**b ,  2  , [2,4] ), '\n',
    '\n',
    // foldr( (a,b)=>a**b ) (2) ( [2,4] ), '\n',
    // foldl( (a,b)=>a+b ) ('-') ( ['a','b','c'] ), '\n',
    // foldr( (a,b)=>a+b ) ('_') ( ['a','b','c'] ), '\n',
    // foldl( (a,b)=>[...a,b] ) ([1]) ( ['a','b','c'] ), '\n',
    // foldr( (a,b)=>[...a,b] ) ([2]) ( ['a','b','c'] ), '\n',
)
*/


// ------------------------------------------------------------------------ alt
/*
    foldr :: (a -> b -> b) -> b -> [a] -> b
    foldr _ acc []     = acc
    foldr f acc (x:xs) = f x (foldr f acc xs)

    foldr :: (a -> b -> b) -> b -> [a] -> b
    foldr          f         acc   arr
*/
