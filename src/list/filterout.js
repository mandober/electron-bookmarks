// --------------------------------------------------------------------- import
//import assert from 'assert'
import curry from '../f/curry.js'
// import foldr from './foldr.js'
// import cons from './cons.js'

import filter from '../list/filter.js'

// ----------------------------------------------------------------- definition
// filterout :: (a -> Bool) -> [a] -> [a]
const filterout = curry((p, [x,...xs]) =>
    x === undefined
        ? []
        : p(x)
            ? [   ...filterout(p, xs)]
            : [x, ...filterout(p, xs)]
);

// --------------------------------------------------------------------- export
export default filterout


// ---------------------------------------------------------------------- check

/*
console.log('\n',
    filterout(a => a > 4) ( [3,4,5,6,7] ), '\n',
    filterout(a => a >= 4)( [3,4,5,6,7] ), '\n',
    filterout(a => a < 4) ( [3,4,5,6,7] ), '\n',
    filterout(a => a <= 4)( [3,4,5,6,7] ), '\n',
    '\n',
    filter(a => a > 4) ( [3,4,5,6,7] ), '\n',
    filter(a => a >= 4)( [3,4,5,6,7] ), '\n',
    filter(a => a < 4) ( [3,4,5,6,7] ), '\n',
    filter(a => a <= 4)( [3,4,5,6,7] ), '\n',
)
*/
