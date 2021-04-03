// --------------------------------------------------------------------- import
import curry from '../f/curry.js'

// ------------------------------------------------------------------------ api
/**
 * Fold a list from the right side.
 * 
 * foldr :: (a -> b -> b) -> b -> [a] -> b
 * 
 * @param abb (a -> b -> b)  Binary fn does: b' = abb(a, b)
 * @param b   b              Initial value of type b, same as abb's return type
 * @param as  [a]            An array, [a]
 * @return    b              The last b' processed by abb
 * 
 */
const foldr = curry((abb, b, [...as]) =>
    foldrc (curry(abb)) (b) (as)
);



/*
function reduce<A, B>(
    fn: (aggr: B, x: A) => B,
    def: B,
    xs: A[],
  ): B {
    return xs.reduce(fn, def);
  }
*/

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
