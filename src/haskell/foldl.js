// foldl :: Foldable t => (b -> a -> b) -> b -> t a -> b
const foldl = f => acc => ([x, ...xs]) =>
    x === undefined
        ? acc
        : foldl (f) (f(acc, x)) (xs)
;

export default foldl


/*
console.log(
    '\n',
    foldl( (a,b)=>a+b ) (0) ( [3,4,5,6] ), '\n',
    foldl( (a,b)=>a**b ) (2) ( [5] ),'\n',

)
*/


/*
foldl :: Foldable t => (b -> a -> b) -> b -> t a -> b
foldl _ acc []     = acc
foldl f acc (x:xs) = foldl f (f acc x) xs

foldr :: Foldable t => (a -> b -> b) -> b -> t a -> b
foldr _ acc []     = acc
foldr f acc (x:xs) = f x (foldr f acc xs)
*/
