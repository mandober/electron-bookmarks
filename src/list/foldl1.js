// --------------------------------------------------------------------- import
import curry from '../f/curry.js'

// ----------------------------------------------------------------- definition
// array must be non-empty

// foldl1 :: (a -> a -> a) -> [a] -> a
const foldl1 = curry((f, [x, y, ...xs]) =>
    y === undefined
        ? x
        : foldl1 (f) ([curry(f)(x, y), ...xs])
);

// --------------------------------------------------------------------- export
export default foldl1;



// ---------------------------------------------------------------------- check
/*
console.log(
    '\n',
    foldl1 ((a, b) => a + b) ([]), '\n',
    foldl1 ((a, b) => a + b) ([2]), '\n',
    foldl1 ((a, b) => a + b) ([2, 6]), '\n',
    foldl1 ((a, b) => a + b) ([2,4,6,8]), '\n',
)
*/


/*
foldl1 :: (a -> a -> a) -> [a] -> a
foldl1 _ (x:[])   = x
foldl1 f (x:y:xs) = foldl1 f (f x y : xs)

foldr1 :: (a -> a -> a) -> [a] -> a
foldr1 _ (x:[]) = x
foldr1 f (x:xs) = f x (foldr1 f xs)


    foldl1 :: (a -> a -> a) -> List a -> a
    foldl1 f (x `Cons` Empty) = x
    foldl1 f (a `Cons` (b `Cons` xs)) = foldl1 f (f a b `Cons` xs)

    foldr1 :: (a -> a -> a) -> List a -> a
    foldr1 f (x `Cons` Empty) = x
    foldr1 f (x `Cons` xs)    = f x (foldr1 f xs)


base case:
foldl1  f  (x:[]) = x

rec case:
foldl1  f  (x:y:xs)    = foldl1 f   (f x y : xs)
foldl1 (+) (2:4:[6,8]) = foldl1 (+) (+ 2 4 :[6,8]) = foldl1 (+) ([6,6,8])
foldl1 (+) (6:6:[8])   = foldl1 (+) (+ 6 6 :[8])   = foldl1 (+) ([12,8])
foldl1 (+) (12:8:[])   = foldl1 (+) (+ 12 8:[])    = foldl1 (+) ([20]
foldl1 (+) (20:[]) = 20 (base case)

*/
