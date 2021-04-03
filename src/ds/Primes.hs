-- :l src/RoadToLogic/Primes.hs
module RoadToLogic.Primes where

-- following the book:
-- The Haskell Road to Logic Maths and Programming, 2018

-- ---------------------------------------------------------------------------
-- divides: m | n    m divides n without remainder
-- ---------------------------------------------------------------------------
divides :: Integral a => a -> a -> Bool
divides 0 _ = error "Division by zero"
divides d n = n `rem` d == 0

-- ---------------------------------------------------------------------------
-- Primality Test
-- ---------------------------------------------------------------------------
{-
A prime number, p, is a natural number, n > 1, that has no proper divisors, other than 1 and p (itself)

!∃p ∈ N . (1 | p ∧ p | p) -> p is prime


D(n) is the set of all proper divisers of n that are d > 1 and the last member is always n itself. Therefore, this set is always nonempty. If it contains one element that element is n itself and that number is prime.

We implement primality test with the function LD. It is convenient to define LD in terms of a second function LDF, for the least divisor starting from a given threshold k, with k <= n. Thus, LDF(k)(n) is the least divisor of n > k. Clearly, LD(n) = LDF(2)(n).
-}

-- ---------------------------------------------------------------------------
-- Least divisor
-- ---------------------------------------------------------------------------
ld :: Integral a => a -> a
ld n = ldf 2 n

ldf :: Integral a => a -> a -> a
ldf k n | divides k n = k
        | k^2 > n     = n
        | otherwise   = ldf (k+1) n


-- ---------------------------------------------------------------------------
-- Primality Test #1
-- ---------------------------------------------------------------------------
-- prime0, our first implementation of the test for being a prime number
prime0 :: Integral a => a -> Bool
prime0 n | n < 1     = error "not a positive integer"
         | n == 1    = False
         | otherwise = ld n == n

-- ---------------------------------------------------------------------------
-- minimum of a list of ints
-- ---------------------------------------------------------------------------
minimal :: (Num a, Ord a) => [a] -> a
minimal []     = error "empty list"
minimal [x]    = x
minimal (x:xs) = min x (minimal xs)

-- ---------------------------------------------------------------------------
-- maximum of a list of ints
-- ---------------------------------------------------------------------------
maximal :: (Num a, Ord a) => [a] -> a
maximal []     = error "empty list"
maximal [x]    = x
maximal (x:xs) = max x (maximal xs)

-- ---------------------------------------------------------------------------
-- remove fist occurance
-- ---------------------------------------------------------------------------
-- Define a function removeFst that removes the first occurrence of an integer m from a list of integers. If m does not occur in the list, the list remains unchanged.
removeFst :: Integral a => a -> [a] -> [a]
removeFst _ []   = []
removeFst n (x:xs) | n == x    = xs
                   | otherwise = x : removeFst n xs

-- ---------------------------------------------------------------------------
-- sort a list
-- ---------------------------------------------------------------------------
-- define a function that sorts a list of integers in order of increasing size:
-- 1) an empty list is already sorted
-- 2) for non-empty: put minimum in front of the result of sorting the list
--    that results from removing its minimum
sortInts :: Integral a => [a] -> [a]
sortInts [] = []
sortInts xs = me : sortInts (removeFst me xs) where me = minimal xs
-- sortInts xs = let me = minimal xs in me : (sortInts (removeFst me xs))


-- ---------------------------------------------------------------------------
-- average of a list
-- ---------------------------------------------------------------------------
-- (/) :: Fractional a => a -> a -> a
-- division expects Floats (Fractional): fromInteger converts Int to Floats
average :: [Integer] -> Float
average [] = error "List empty"
average xs = fromIntegral (sum xs) / fromIntegral (length xs)


-- ---------------------------------------------------------------------------
-- counting the number of occurrences of a character in a string
-- ---------------------------------------------------------------------------
count :: Char -> String -> Int
count _ [] = 0
count ch (x:xs) | ch == x   = 1 + count ch xs
                | otherwise =     count ch xs


-- ---------------------------------------------------------------------------
-- repeat a character its index number of times (1-based indexing)
-- ---------------------------------------------------------------------------
-- replicate :: Int -> a -> [a]

-- "bang!" ~~> "baannngggg!!!!!"
blowup lst = blow 1 lst where
    blow _ []     = []
    blow n (x:xs) = replicate n x ++ blow (n+1) xs


lst = blowup [1..5]   -- [1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5]


-- ---------------------------------------------------------------------------
-- sorts a list of strings ABC
-- ---------------------------------------------------------------------------
-- sortStrings "pera" "zika" "adam"   -- [ "adam", "pera", "zika" ]
sortStrings :: [String] -> [String]
sortStrings []     = []
sortStrings [x]    = [x]
-- sortStrings (x:xs) =
