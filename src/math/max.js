// --------------------------------------------------------------------- import
import curry from '../f/curry.js'

// ----------------------------------------------------------------- definition
// max returns bigger of the two num args
const max = curry((x, y) => x > y ? x : y);

// --------------------------------------------------------------------- export
export default max;


// ---------------------------------------------------------------------- check
console.log('\n',
    max (1, -22) , '\n',
    max (Infinity, -Infinity) , '\n',
    max (10n**4n, 10n**3n) , '\n', // RangeError: Exponent must be positive

)
