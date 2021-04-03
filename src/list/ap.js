// --------------------------------------------------------------------- import
// import * as prelude from '../lib/prelude.js'
import map from './map.js'
import curry from '../f/curry.js'

// ----------------------------------------------------------------- definition
// ap :: [(a -> b)] -> [a] -> [b]
const ap = ([f, ...fs]) => ([...xs]) =>
    f === undefined
        ? []
        : [ ...map(f)(xs), ...ap(fs)(xs) ]
;

// --------------------------------------------------------------------- export
export default ap;



//............................................................... check
/*
let gs = [x=>x*2, x=>x+10]
let ys = [5, 7]
// [5, 7] ~~> [10,14 , 15,17]

console.log(
    ap(gs)(ys)
)
*/



/*
applicative's ap method
takes 
a list of n functions and
a list of m values,
and applies each function to the list
producing a new list that is n times larger.

ap ([f1..fn]) ([x1..xn])

ap :: f (a -> b) -> f a -> f b
ap :: List (a -> b) -> List a -> List b
ap :: [(a -> b)] -> [a] -> [b]

given
gs = [x=>x*2, x=>x+10]
ys = [5, 7]
expected result: [10,14 , 15,17]

*/
