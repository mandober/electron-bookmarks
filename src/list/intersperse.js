//............................................................... imports
// import * as prelude from '../lib/prelude.js'

//............................................................... definition
// intersperse :: a -> [a] -> [a]
const intersperse = ([x, ...xs]) => ([y, ...ys]) =>
    x === undefined
        ? []
        : y === undefined
            ? []
            : [x,y, ...intersperse(xs)(ys)]
;

//............................................................... export
export default intersperse;

//............................................................... haskell
/*
intersperse :: a -> [a] -> [a]
intersperse _ [] = []
intersperse e xs = init $ xs >>= (:[e])

init $ xs >>= (:[e])
xs >>= f === concat $ map f xs

init $       xs >>= (:[e])
init $ concat $ map (:[e]) xs
                map (:["-"]) ["one", "two", "tre"]
                   ("one" : ["-"]) ~~> ["one", "-"]
                   ("two" : ["-"]) ~~> ["two", "-"]
                   ("tre" : ["-"]) ~~> ["tre", "-"]
init $ concat [ ["one","-"] , ["two","-"] , ["tre","-"] ]
init $        [  "one","-" ,   "two","-" ,   "tre","-"  ]
              [  "one", "-",   "two", "-",   "tre"      ]
*/


//............................................................... check
console.log(
    '\n',
    intersperse ( [1,3,5,7] ) ( [2,4,6,8] ), '\n',

    // intersperse ( [1,3,5,7] ) ( [2,4]     ), '\n',
    // intersperse ( [1,3,5]   ) ( [2,4,6,8] ), '\n',
    // intersperse ( []        ) ( [2,4,6,8] ), '\n',
    // intersperse ( []        ) ( []        ), '\n',
)
