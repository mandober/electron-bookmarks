// --------------------------------------------------------------------- import
import curry   from '../f/curry.js'
// import flip    from '../f/flip.js'
// import compose from '../f/compose.js'

// import foldr from './foldr.js'
// import foldl from './foldl.js'
// import cons  from './cons.js'

// ----------------------------------------------------------------- definition
// concat :: [a] -> [a] -> [a]
const concat = curry(([...xs], [...ys]) => [...xs,...ys]);

// --------------------------------------------------------------------- export
export default concat;

// ------------------------------------------------------------------------ alt
/*
concat combines 2 arrays together.

It may be considered as prepending the first to the second:
    xs ++ ys = [...xs,...ys]
    concat [1,2,3] [4,5] = [1,2,3, 4,5]

It can be defined in several ways, and also in terms of foldr:
    concat xs ys = foldr cons ys xs

we need to mention the 2 args cos they are consumed flipped.
defining it point-free would still work but as ys ++ xs, not as
it should, that is, as xs ++ ys:
    concat = foldr cons
    concat [1,2,3] [4,5] = [4,5, 1,2,3]


note: Haskell's concat is flatten, while (++) combines 2 lists
*/


/*
const concat1 = curry((xs, ys) => foldr(cons, ys, xs));
const concat2 = flip(foldr(cons));
const concat3 = compose(flip, foldr)(cons);
const concatr = foldr(cons);
*/

// ---------------------------------------------------------------------- check
/*
console.log(
    '\n',
    concat ([1,2,3]) ([4,5]), '\n',
    concat1 ([1,2,3]) ([4,5]), '\n',
    concat2 ([1,2,3]) ([4,5]), '\n',
    concatr ([1,2,3]) ([4,5]), '\n',
)
*/
