// --------------------------------------------------------------------- import
// import curry from '../f/curry.js'
import concat from './concat.js'
import foldr from './foldr.js'
// import map from './map.js'
// import head from './head.js'

// --------------------------------------------------------------------- define
// flat = foldl (++) mempty

// flat :: [[a]] -> [a]
const flat = foldr (concat) ([]);

// --------------------------------------------------------------------- export
export default flat;



// --------------------------------------------------------------- alternatives
/*
const flats = ([x, ...xs]) =>
    x === undefined
        ? []
        : Array.isArray(x)
            ? [ ...flats(x), ...flats(xs) ]
            : [          x , ...flats(xs) ]
;
*/
// [ (Array.isArray(x) ? ...flats(x) : x), ...flats(xs) ]



// --------------------------------------------------------------- alternatives
/*
const flatt = (...arr) =>
    Array.isArray(arr)
        ? arr.reduce((acc, el) => acc.concat(flatt(el)), [])
        : arr
;

const flatDepth = depth => (...arr) =>
    arr.reduce((acc, el) => acc.concat(
            depth === 0
            ? [el]
            : (depth > 1 && Array.isArray(el))
                ? flatt(el, --depth)
                : el
        ), [])
;
*/

// ---------------------------------------------------------------------- check
/* 
let arr1 = [[1,3],[5,7],[2,4],[6,8]];

console.log(
    '\n',
    // map (head) (arr1) , '\n',
    flat ( arr1 ), '\n',
    // foldl (mappend) ([]) (arr1), '\n',
    // foldr (mappend) ([]) (arr1), '\n',
)
*/
