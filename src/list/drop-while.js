// --------------------------------------------------------------------- import
import curry from '../f/curry.js'
import foldr from './foldr.js'

// ----------------------------------------------------------------- definition
// dropWhile :: (a -> Bool) -> [a] -> [a]
const dropWhile = curry((p, [x, ...xs]) => 
    x === undefined
        ? []
        : p(x) ? dropWhile(p, xs) : [x, ...xs]
);

// --------------------------------------------------------------------- export
export default dropWhile;


// ---------------------------------------------------------------------- check
console.log('\n',
    dropWhile (x => x <= 3, [3,1,2,3,5,6,7,8]), '\n',
)




/*
drop elements while the predicate holds

dropWhile :: (a -> Bool) -> [a] -> [a]
dropWhile p []     = []
dropWhile p (x:xs) = if p x then dropWhile p xs else x:xs

dropWhile (<5) [1..10]

*/
