// map :: (a -> b) -> [a] -> [b]
const map = f => ([x, ...xs]) =>
    x === undefined
        ? []
        : [f(x), ...map(f)(xs)]
;

export default map



// map via foldl
import foldl from './foldl.js'
// map_l f xs = foldl (\ acc x -> acc ++ [f x]) [] xs
const map_foldl = f => ([...xs]) =>
    foldl ((acc, x) => [...acc, f(x)]) ([]) (xs)
;



// map via foldr
import foldr from './foldr.js'
// map_foldr f xs = foldr (\ x acc -> (f x) : acc) [] xs
const map_foldr = f => ([...xs]) =>
    foldr ((x, acc) => [f(x), ...acc]) ([]) (xs)
;





console.log(
    '\n',
    map( (a)=>a+5 )( [3,4,5,6] ), '\n',
    map_foldl( (a)=>a+5 )( [3,4,5,6] ), '\n',
    map_foldr( (a)=>a+5 )( [3,4,5,6] ), '\n',

)
//map(a=>console.log(a))( [3,4,5,6] )
//map(console.log)( [3,4,5,6] )
