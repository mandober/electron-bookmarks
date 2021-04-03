// --------------------------------------------------------------------- import
import curry from '../f/curry.js'

// ----------------------------------------------------------------- definition
// array must be non-empty

// foldr1 :: (a -> a -> a) -> [a] -> a
const foldr1 = curry((f, [x, y, ...xs]) =>
    y === undefined
        ? x
        : curry(f)(x, foldr1(f, [y, ...xs]))
);

// --------------------------------------------------------------------- export
export default foldr1;


// ---------------------------------------------------------------------- check
console.log(
    '\n',
    foldr1 ((a, b) => a + b) ([]), '\n',
    foldr1 ((a, b) => a + b) ([2]), '\n',
    foldr1 ((a, b) => a + b) ([2, 6]), '\n',
    foldr1 ((a, b) => a + b) ([2,4,6,8]), '\n',
)

/*
    foldr1 :: (a -> a -> a) -> List a -> a
    foldr1 f (x:[]) = x
    foldr1 f (x:xs) = f x (foldr1 f xs)

    foldr1 :: (a -> a -> a) -> List a -> a
    foldr1 f (x `Cons` Empty) = x
    foldr1 f (x `Cons` xs)    = f x (foldr1 f xs)


    foldl1 :: (a -> a -> a) -> List a -> a
    foldl1 f (x `Cons` Empty) = x
    foldl1 f (a `Cons` (b `Cons` xs)) = foldl1 f (f a b `Cons` xs)

*/
