// foldl :: Foldable t => (b -> a -> b) -> b -> t a -> b
const foldl = f => acc => ([x, ...xs]) =>
    x === undefined
        ? acc
        : foldl (f) (f(acc, x)) (xs)
;


// product :: (Number a) => [a] -> a
// product = foldl (*) 1
const product = foldl ('*') (1)

// sum :: (Number a) => [a] -> a
// sum = foldl (+) 0
const sum = foldl ('+') (0)


export default foldl

/*

foldl :: Foldable t => (b -> a -> b) -> b -> t a -> b
foldl _ acc []     = acc
foldl f acc (x:xs) = foldl f (f acc x) xs


foldr :: Foldable t => (a -> b -> b) -> b -> t a -> b
foldr _ acc []     = acc
foldr f acc (x:xs) = f x (foldr f acc xs)



foldl                                  foldr
acc         0 : 1 : 2 : 3 :  []          acc
              +   +   +   +  0
              f   f   f   f  acc

            0 + 1 + 2 + 3 +  9
            9 : 9 : 10:12 :15


foldl (+) 9 [0,1,2,3]
scanl (+) 9 [0,1,2,3]    -- [9,9,10,12,15]

*/
