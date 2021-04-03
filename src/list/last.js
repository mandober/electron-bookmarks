// --------------------------------------------------------------------- import
import curry from '../f/curry.js'
import flip from '../f/flip.js'
import cons from './cons.js'

// ------------------------------------------------------------------------ def
// last :: [a] -> a -> a
const last = ([x, y, ...xs]) =>
    x === undefined
        ? y
        : last(xs);


// --------------------------------------------------------------------- export
export default last;


console.log('\n',
    last ('abcde')                  , '\n',
    last ([])                   , '\n',
    last ([1,2,3])                   , '\n',
)
