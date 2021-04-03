// --------------------------------------------------------------------- import
import curry from '../f/curry.js'


// ----------------------------------------------------------------- definition
const suffix = curry(([x,...xs]) => ([y,...ys]) =>
    x === undefined
        ? true
        : y === undefined
            ? false
            : x === y && suffix(xs) (ys)

);

// --------------------------------------------------------------------- export


/*
const suffix = foldr (([x,...xs], [y,...ys]) => [x === y ? x : xs])

const rev = ([x, ...xs]) => ([y,...ys]) =>
    (x === undefined
        ? []
        : [ ...rev(xs)(ys), ...(x === y ? x : []) ]
    ).join('')
*/

// reverse = foldr (\ x xs -> xs ++ [x]) []
// reverse = foldr ((x, xs) => concat(xs, [x]) ([])

console.log('\n',
    suffix ('function') ('function')   , '\n',
    suffix('Function')('FunctionAsync'), '\n',
    suffix('Function')('AsyncFunction'), '\n',
)
