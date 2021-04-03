// --------------------------------------------------------------------- import
import curry from '../f/curry.js'

// import foldl from './foldl.js'
// import foldr from './foldr.js'
// import cons from './cons.js'

// import compose from '../f/compose.js'

// ----------------------------------------------------------------- definition
// map :: (a -> b) -> [a] -> [b]
const map = curry((f, [x, ...xs]) =>
    x === undefined
        ? []
        : [f(x), ...map(f, xs)]
);

// --------------------------------------------------------------------- export
export default map;



// ------------------------------------------------------------------------ alt
/*
// map in terms of fold

// map2 f = foldr ((:) . f) []
// map2 f = foldr (compose(cons, f)) ([])

// mapl f xs = foldl (\ acc x -> acc ++ [f x]) [] xs
const mapl = f => ([...xs]) => foldl ((acc, x) => [...acc, f(x)]) ([]) (xs)

// mapr f xs = foldr (\ x acc -> (f x) : acc)  [] xs
const mapr = f => ([...xs]) => foldr ((x, acc) => [f(x), ...acc]) ([]) (xs)


*/

//const map2 = f => foldr(compose(cons, f)) ([])

// ---------------------------------------------------------------------- check
/*
console.log(
    '\n',
    map( a => a + 5 )  ( [3,4,5,6] ), '\n',
    map( a => a + 5 , [3,4,5,6] ), '\n',

    map2 (a => a + 5)  ( [3,4,5,6] ), '\n',
    // map2( a => a + 5) ( [3,4,5,6] ), '\n',
)
*/
