// --------------------------------------------------------------------- import
import curry from '../f/curry.js'

// ----------------------------------------------------------------- definition
/**
 * cons is a binary function that prepends an element to an array, i.e. it places a new element at the front. This may be a big problem since prepending is cheap for lists but very expensive for arrays. On the other hand, appending is cheap for arrays but expensive for lists.
 * 
 * cons :: a -> [a] -> [a]
 */
const cons = curry((x, [...xs]) => [x, ...xs]);

// --------------------------------------------------------------------- export
export default cons;


// ---------------------------------------------------------------------- check
/*
console.log(
    '\n',
    cons(1, []), '\n',
    cons(2)([3,7]), '\n',
    cons('a')('bcd'), '\n',
)
*/
