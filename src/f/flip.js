// ---------------------------------------------------------------------- about
// no need to write (b, a) then to curry the params 
// coz their curryied form is expected when one flips the args.

// --------------------------------------------------------------------- import
import curry from './curry.js';

// ------------------------------------------------------------------------ api
/**
 * Flips the arguments to a binary function.
 * The arguments are then to be supplied one at a time (i.e. curryied).
 *
 * flip :: (a -> b -> c) -> b -> a -> c
 *
 * @param f   (a, b) -> c  A binary function, f(a,b)
 * @param a   a            The first param
 * @param b   b            The second param
 * @return    b            The result of f(b)(a)
 *
 */
const flip = f => curry((a, b) => f(b)(a));

// --------------------------------------------------------------------- export
export default flip;


// ---------------------------------------------------------------------- check
/*
import cons from '../list/cons.js'
//      (:) :: a -> [a] -> [a]
// flip (:) :: [a] -> a -> [a]

console.log('\n',
    'cons (normal)       :', cons(1, [2,3]), '\n',
    'cons (curryied)     :', curry(cons)(1, [2,3]), '\n',
    'cons (curryied call):', curry(cons)(1)([2,3]), '\n',

    'cons (flip)    :', flip(cons)([2,3], 1), '\n',
    'cons (flip, cc):', flip(cons)([2,3])(1), '\n',

    '2:', cons(4,[3]), '\n',
    '3:', cons(4,[3,2]), '\n',
    '4:', flip(cons)([2,3], 1), '\n',
    '5:', flip(cons)([2], 1), '\n',
    '6:', flip(cons)([], 1), '\n',
    '7:', flip(cons)([])(1), '\n',
    '8:', flip(cons)([2])(1), '\n',
    '9:', flip(cons)([2,3])(1), '\n',
)
*/
