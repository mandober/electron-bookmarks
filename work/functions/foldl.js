/* (working files, finished functions in src)

foldl
=====

Transplanted form Haskell, foldl and foldr are the functions to fold a list, corresponding to folding a list from both ends. foldr seems more suitable for Haskell's list because they are linked-lists - meaning the first element that is added to the empty list could be considered as the one that remains first, since all other elements are subsequently prepended (as opposed to being appended) to the list thereafter.

This is because prepending an element to a list is by far the cheapest operation, done in O(1), then any other method. To that end, appending an element to a list is the most costly operation performed in O(n) because the entire list has to be traversed before an element may be appended.

On the other hand, adding an element to a JS array (if impl as a vector) means adding it to the end of the array, after the last element, since appending an element (called "push" i.e. pushing an element) is the least costly operation.

Prepending an element would (probably?) result in relocation (and reallocation) of the entire array since all existing elements would have to be shifted one place down (toward the end of an array) in order to make room for the new element (at least if it's impl as a vector; there would not be such high cost if impl as a map). Truth is, I'm not sure how the JS engines deal with the arrays under the hood; some engines (or the same engine sometimes) may preallocate contiguous memory for an array; probably more often, arrays are implemented as dictionaries that map values to indices. It seems there's no guarantee how an array is implemented and it seems it much depends on the array itself (sparse or compact).



*/



// foldl :: (b -> a -> b) -> b -> [a] -> b
const foldl = f => acc => ([x, ...xs]) =>
    x === undefined
        ? acc
        : foldl (f) (f(acc)(x)) (xs)
;
export default foldl



/*
    foldl :: Foldable t => (b -> a -> b) -> b -> t a -> b
    foldl _ acc []     = acc
    foldl f acc (x:xs) = foldl f (f acc x) xs
*/
