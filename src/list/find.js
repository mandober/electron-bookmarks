// --------------------------------------------------------------------- import
import curry from '../f/curry.js'

// ----------------------------------------------------------------- definition
/**
 * Find takes a value and an array and returns a Maybe(Number).
 * If the value is found, it returns a `Just(idx)` where `idx` is the index
 * at which the value is first encountered. In case the value was not found,
 * it returns a `Nothing :: Maybe Number`.
 *
 * find :: a -> [a] -> Maybe Number
 */
const find = curry(
    (y, [...xs]) => find$ (0) (y) (xs)
);


const find$ = n => y => ([x,...xs]) =>
    x === undefined
        ? -1
        : y === x
            ? n
            : find$ (n+1) (y) (xs)



// --------------------------------------------------------------------- export
export default find;




// ---------------------------------------------------------------------- check

console.log(
    '\n',
    find(3)([ 10, 11, 12, 2, 3 ]), '\n',
    find(3)([]), '\n',
    find(3)([ undefined, undefined, undefined, 3 ]), '\n',
    find(3)([1,2,3,4,5]), '\n',
)
