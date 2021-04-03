// --------------------------------------------------------------------- import
import curry from '../f/curry.js'

// ----------------------------------------------------------------- definition
/**
 * The `elem` predicate takes a value of type `a` and an array of type `[a]` and checks if the value is in the array.
 * 
 * elem :: a -> [a] -> Bool
 * 
 * @param T                    y  A value of type T.
 * @param [x: T, ...xs: [T]]      An array of [T].
 * @return boolean
 * 
 */
const elem = curry((y, [x,...xs]) =>
    x === undefined
        ? false
        : x === y ? true : elem(y, xs)
);

// --------------------------------------------------------------------- export
export default elem;


// ---------------------------------------------------------------------- check
console.log(
    '\n',
    elem(3)([])             , '\n',
    elem(3)([ 6, 5, 4, 3 ]) , '\n',
    elem(3)([ 6, 5, 4, 2, 1 ]) , '\n',
    elem(3)([ 6, 3, 4, 3 ]) , '\n',
    elem(3)([3])            , '\n',
)
