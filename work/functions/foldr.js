/// foldr :: (a -> b -> b) -> b -> [a] -> b
const foldr = f => e => ([x,...xs]) =>
    x === undefined 
        ? e
        : f (x) ( foldr(f)(e)(xs) )
;
// reducer f :: e x_i where
// x_i is the current list element, and
// e   is the accumulator

// e is usually the identity element of the specific carrier type:
//      if  f = (+)     then    e = 0
//      if  f = (*)     then    e = 1
//      if  f = (&&)    then    e = true
//      if  f = (||)    then    e = false
//      if  f = (:)     then    e = []
//      if  f = (++)    then    e = []


export default foldr


/*
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
