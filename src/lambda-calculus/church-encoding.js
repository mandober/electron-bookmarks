/*
Lambda Calculus: Church encoding

- integers
- arithmetic operators
- mathematical functions


church() and unchurch() convert between natural numbers and Church numerals:

type Church a = (a -> a) -> a -> a

church :: Integer -> Church Integer
church 0 = \f -> \x -> x
church n = \f -> \x -> f (church (n-1) f x)

unchurch :: Church Integer -> Integer
unchurch cn = cn (+ 1) 0

---
type Church = (Integer -> Integer) -> Integer -> Integer
church :: Integer -> Church Integer; church 0 = \f -> \x -> x; church n = \f -> \x -> f (church (n-1) f x)
unchurch :: Church Integer -> Integer; unchurch cn = cn (+ 1) 0
---


let churchZero = f => x => x;
let nextChurch = n => f => x => f(n(f)(x));
let toInt = c => c((x) => x + 1)(0);
let toChurch =  n => n === 0 ? churchZero : nextChurch(toChurch(n - 1));
console.log(toInt(toChurch(5)) === 5);


*/
import Church from './church-booleans.js'

Church.Id = a => a


// Succ :: a -> (a -> a) -> a ->
Church.Succ = n => f => x => f (n (f) (x) )
Church.Zero = _ => z => z


// church :: Integer -> ChurchInteger
Church.church = n =>
    n === 0
        ? Church.Zero
        : Church.Succ(Church.church(n - 1))
;

// unchurch :: ChurchInteger -> Integer
Church.unchurch = c => c(x => x + 1)(0);


export default Church


/*
    churchZero = const id
    churchSucc = (<*>) (.)
    churchAdd  = (<*>) . fmap (.)
    churchMul  = (.)
    churchExp  = flip id

    church :: Int -> ((a -> a) -> a -> a)
    church 0 = churchZero
    church n = churchSucc $ church (n - 1)

    -- Or, as a fold:
    -- church n = foldr (.) id . replicate n

    -- Or, as an iterate:
    -- church n = iterate churchSucc churchZero !! n

    unchurch :: ((Int -> Int) -> Int -> Int) -> Int
    unchurch cn = cn succ 0

    [cThree, cFour] = church <$> [3, 4]

    main :: IO ()
    main =
        print $
        unchurch <$>
        [ churchAdd cThree cFour
        , churchMul cThree cFour
        , churchExp cFour cThree
        , churchExp cThree cFour
        ]

*/


// -- TEST --------------------------------------------

console.log(
    '\n',
    Church,'\n',
    Church.unchurch(Church.Succ(Church.church(3))),
    '\n',
)
