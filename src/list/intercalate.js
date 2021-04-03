//............................................................... import
// import * as prelude from '../lib/prelude.js'

//............................................................... definition
// String -> [String] -> String
const intercalate = ([x, ...xs]) => [x, ...xs]


//............................................................... export
export default intercalate;


/*

join sep xs = foldr (\a b -> a ++ if b == "" then b else sep ++ b) "" xs

join " " ["is","there","such","a","function","?"]

joinBy sep cont = drop (length sep) $ concat $ map (\w -> sep ++ w) cont


intersperse :: a -> [a] -> [a]
intersperse _ [] = []
intersperse e xs = init $ xs >>= (:[e])

intercalate :: [a] -> [[a]] -> [a]
intercalate e xs = concat $ intersperse e xs


xs >>= f ≡ concat $ map f xs


intercalate xs xss ≡ concat (intersperse xs xss)

It inserts the list xs
in between the lists in xss
and concatenates the result

>>> intercalate ", " ["Lorem", "ipsum", "dolor"]
"Lorem, ipsum, dolor"



https://folktale.origamitower.com/docs/v2.3.0/

https://stackoverflow.com/questions/9220986/is-there-any-haskell-function-to-concatenate-list-with-separator

http://hackage.haskell.org/package/base-4.8.2.0/docs/Data-List.html#v:intersperse

http://hackage.haskell.org/package/base-4.14.0.0/docs/Prelude.html#v:unlines

https://hackage.haskell.org/package/base-4.14.0.0/docs/Data-List.html

https://hoogle.haskell.org/?hoogle=intercalate

*/
