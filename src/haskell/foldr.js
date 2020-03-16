// foldr :: Foldable t => (a -> b -> b) -> b -> t a -> b
const foldr = f => acc => ([x, ...xs]) =>
    x === undefined
        ? acc
        : f (x, foldr(f)(acc)(xs))
;

export default foldr


/*
foldl :: Foldable t => (b -> a -> b) -> b -> t a -> b
foldl _ acc []     = acc
foldl f acc (x:xs) = foldl f (f acc x) xs

foldr :: Foldable t => (a -> b -> b) -> b -> t a -> b
foldr _ acc []     = acc
foldr f acc (x:xs) = f x (foldr f acc xs)
*/


/*
console.log(
    '\n',
    // foldl( (a,b)=>a**b ) (2) ( [2,4] ), '\n',
    foldr( (a,b)=>a**b ) (2) ( [2,4] ), '\n',

    // foldl( (a,b)=>a+b ) ('-') ( ['a','b','c'] ), '\n',
    foldr( (a,b)=>a+b ) ('_') ( ['a','b','c'] ), '\n',

    // foldl( (a,b)=>[...a,b] ) ([1]) ( ['a','b','c'] ), '\n',
    foldr( (a,b)=>[...a,b] ) ([2]) ( ['a','b','c'] ), '\n',
)
*/
