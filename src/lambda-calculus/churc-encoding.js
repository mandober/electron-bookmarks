/*
Lambda Calculus: Church encoding


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



*/


// succ :: a -> (a -> a) -> a ->
const succ = n => f => x => f ( n (f) (x) )

// church :: Integer -> Church Integer
const church = c => c(x => x + 1)(0);

// unchurch :: Church Integer -> Integer
const unchurch = n => n === 0 ? Z : S(int2c(n - 1));





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


-- TEST --------------------------------------------

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
