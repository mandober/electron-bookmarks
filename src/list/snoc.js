// --------------------------------------------------------------------- import
import curry from '../f/curry.js'
import flip from '../f/flip.js'
import cons from './cons.js'

// ------------------------------------------------------------------------ def
// snoc :: [a] -> a -> [a]
const snoc = curry(([...xs], x) => [x,...xs]);

// ------------------------------------------------------------------- alt defs
const snoc2 = flip(cons);


// --------------------------------------------------------------------- export
export default snoc;



// ------------------------------------------------------------------------ alt
/*

cons :: a -> [a] -> [a]  cons (1) ([2,3,4])  \ = [1,2,3,4]
snoc :: [a] -> a -> [a]  snoc ([2,3,4]) (1)  /


snoc - flip cons i.e. cons with args flipped

cons x xs = x : xs
snoc xs x = x : xs

that is, the args are flipped but end result is the same, i.e.
new element is prepended to a list, x:xs
and not changed into xs ++ [x]


WRONG: snoc - add an element to the end of list. NO!
add an elemnt to the front, the same as cons, only flipped args
so snoc takes a list then an el,
while cons takes an el then list!


snoc :: [a] -> a -> [a]
snoc []     y = y : []
snoc (x:xs) y = x : snoc xs y

snoc :: List a -> a -> List a
snoc Empty       x = Cons x Empty
snoc (x `cons` xs) y = x `cons` (snoc xs y)



snoc :: [a] -> a -> [a]
cons :: a -> [a] -> [a]

snoc = flip cons

reverse :: [a] -> [a]
reverse [] = []
reverse (x:xs) = snoc (rev xs) x

*/


// ---------------------------------------------------------------------- check
console.log(
    '\n',
    cons (1) ([2,3,4]) , '\n',
    snoc ([2,3,4]) (1), '\n',
    snoc2 ([2,3,4]) (1), '\n',


    // snoc ([], 444) , '\n',
    // snoc ([3,7]) (22), '\n',
    // snoc ('abc') ('d'), '\n',
    // '\n',
    // snoc2 ([], 444) , '\n',
    // snoc2 ([3,7]) (22), '\n',
    // snoc2 ('abc') ('d'), '\n',

)
