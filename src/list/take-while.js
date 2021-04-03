// --------------------------------------------------------------------- import
import curry from '../f/curry.js'
import foldr from './foldr.js'

// ----------------------------------------------------------------- definition
// takeWhile :: (a -> Bool) -> [a] -> [a]
const takeWhile = curry((p, [x, ...xs]) => 
    x === undefined || !p(x)
        ? []
        : [x, ...takeWhile(p, xs)]
);

// --------------------------------------------------------------------- export
export default takeWhile;


// ---------------------------------------------------------------------- check
console.log('\n',
    takeWhile (x => x <= 3, [3,3,2,3,5,6,3,8]), '\n',
)



/*

// take :: Int -> [a] -> [a]
const take = n => ([x, ...xs]) =>
    n < 1 || x === undefined
        ? []
        : [x, ...take(n-1)(xs)]



-- take elements while the predicate holds

takeWhile :: (a -> Bool) -> [a] -> [a]
takeWhile p []     = []
takeWhile p (x:xs) = if (p x) then (x : takeWhile p xs) else (xs)

takeWhile (>5) [1..10]

*/
