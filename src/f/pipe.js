//............................................................... imports
// f
import apply from './apply.js'
import flip  from './flip.js'

// list
import foldl from '../list/foldl.js'

//............................................................... definition
// pipe :: (a -> b -> b) -> b -> [(a -> b)]
const pipe = foldl(flip(apply));

//............................................................... export
export default pipe;



//............................................................... alt
// apply :: (a -> b) -> a -> b
// flip  :: (a -> b -> c) -> b -> a -> c
// foldl :: (b -> a -> b) -> b -> [a] -> b

// ==========================================================================
const mul = n => n * 5;
const dbl = n => n * 2;
const sqr = n => n **2;
const inc = n => n + 1;

console.log(
    '\n',
    mul(dbl(sqr(inc(3)))), '\n',
    pipe  (3) ([inc, sqr, dbl, mul]), '\n',
)

// ==========================================================================
/*

pipe

compose is RTL composition of functions, so use foldr
pipe    is LTR composition of functions, so use foldl

since foldl is used, it means acc aka initial value i.e. initial arg
of the left-most function, is taken first. No? No! Take it last.

pipe :: a -> (a->b) -> (b->c) -> ... -> (y->z) -> z

foldl f e xs
pipe  f e fs
pipe  $ x fs

pipe works from LEFT2RIGHT
x |> f |> g |> h |> console.log
pipe(f, g, h, console.log)

foldr(f, acc, lst)
f: apply
acc: initially, it's the arg for the first function. then intermediate arg
lst: list of functions, [f, g, h]


// ==========================================================================

5 |> dbl |> dbl |> inc |> dbl |> inc

using pipe with a binary and unary fn
normaly: add(10, double(7))
with pipe operator: 7 |> double |> ( _=> add(10, _ )

*/
