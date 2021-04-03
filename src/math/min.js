// --------------------------------------------------------------------- import
import curry from '../f/curry.js'

// ----------------------------------------------------------------- definition
// min just returns the smaller of the two num args
const min = curry((x, y) => x < y ? x : y);

// what is arg problem?
// wrong type? not enough

// --------------------------------------------------------------------- export
export default min;



// ---------------------------------------------------------------------- check
console.log('\n',
    min(0.000003, -3.3142)   , '\n',
    min(0.000003, 0.000004)  , '\n',
    min(Infinity, -Infinity) , '\n',
    min(-0, -Infinity) , '\n',
    min(-0, +0) , '\n',
    min(-0, 0) , '\n',
    min(0, +0) , '\n',
    min(-0, NaN) , '\n',
    min(NaN, NaN) , '\n',
    min(0, 0.0000000000000001) , '\n',
)
