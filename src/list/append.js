// --------------------------------------------------------------------- import
import curry from '../f/curry.js'
/*
In Haskell, there is (++) which only works on lists; cons and snoc is for inserting a single value in a list. (++) takes `xs` and `ys` lists and produces a new list by prepending the elements of the first (one at a time) to the front of the second

(++) :: [a] -> [a] -> [a]
[]     ++ ys = ys
(x:xs) ++ ys = x : (xs ++ ys)
*/
const pend = ([x, ...xs]) => ([...ys]) =>
    x === undefined
        ? ys
        : [x, ...pend(xs, ys) ]

/*
[1,2,3]        ++ [4,5]
1:[2,3]        ++ [4,5]
1 : ( [2,3]    ++ [4,5] )
1 : ( 2:[3]    ++ [4,5] )
1 : ( 2 : ([3] ++ [4,5]) )



1:2: 3 : ([] ++ [4,5])
1:2: 3 :       ([4,5])
1:2 :        ([3,4,5])
1 :        ([2,3,4,5])
          [1,2,3,4,5]



Perhaps, append should be very flexible and make do with args of any type: whether given arrays (as expected), an array and a value, a value and an array or just values, it should take care of things returning a new array (made of these).

append (5, 11)                  ~~> [5, 11]
append ([1,2], 4,5, [6])        ~~> [1..6]
append ([1,2], 4,5)             ~~> [1,2,4,5]
append ([3], [4,5])             ~~> [3,4,5]
append (4, [2,3])               ~~> [4,2,3]
append (42, [])                 ~~> [42]
append ()                       ~~> []

*/
// (++) :: [a] -> [a] -> [a]
const append = curry(([x, ...xs] , [...ys]) => 
    x === undefined
        ? ys
        : [x, ...append(xs, ys) ]
);

// --------------------------------------------------------------------- export
export default append


// ---------------------------------------------------------------------- check

console.log(
    '\n',
)
