// --------------------------------------------------------------------- import
import curry from '../f/curry.js'
import foldr from './foldr.js'


// ----------------------------------------------------------------- definition
/**
 * Takes a list of predicates and a value and checks if all the predicates
 * hold, in which case it returns true, otherwise false. If the list of
 * predicates is empty, the return value is (vacuously) true.
 *
 * Handy for defining a list of conditions a value must meet.
 *
 * all :: [(a -> Bool)] -> a -> Bool
 *
 */
const all = curry(
    ([p, ...ps], x) =>
    p === undefined
        ? true
        : p(x) ? all(ps, x) : false
);

// --------------------------------------------------------------------- export
export default all;


// -------------------------------------------------------------------- as fold
const all_foldr = ps => x =>
    foldr ((a,b) => a && b) (true) (
        foldr ((p, acc) => [p(x), ...acc]) ([]) (ps)
    )

// ---------------------------------------------------------------------- check
console.log('\n',
    all ([x=>x>3, x=>x<9]) (4) , '\n',
    all ([x=>x>3, x=>x<9]) (14) , '\n',
    all_foldr ([x=>x>3, x=>x<9]) (4) , '\n',
    all_foldr ([x=>x>3, x=>x<9]) (14) , '\n',
)


// -------------------------------------------------------------------- haskell
/*

foldr (&&) True  xs
foldr (||) False xs
foldr (+)  0     xs
foldr (*)  1     xs

*/
