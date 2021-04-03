{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE InstanceSigs #-}
{-
    Set in terms of List

    Unlike a list
    * Set must permit only unique elements - no element duplication allowed.
    * Set must disregard order of elements concerning equalty and similar ops.

    If `a` is an Eq instance, then `Set a` is the type of sets over `a`.
    Equality of sets is defined in terms of the subset relation:
    (A ⊆ B ∧ B ⊆ A) -> (A = B)

    Set     :: [a] -> Set a
    Set []  :: Set a
    Set [2] :: Num a => Set a

    Set equality : [1,2,3] == [3,1,2,1,2,3,2,3]
    1) ORDER     : [1,2,3] == [2,1,3]
    2) UNIQUENESS: [1,2,3] == [1,2,2,3,3,3]

    TYPE PROBLEM:
    What is the type of S(n) = n U {n} ?!
    { ∅, { ∅, {∅} } } ?!
    [ [], [ [], [[]] ] ]
    [ [], [ [], [[]] ] ] :: [[[[a]]]]


    ∻ ∵ ∿ ∽ ∼ ∹ ⊛ ⊹ ⋄ ⋮ ⁖ ⁚ ¤ ⪧
    ɵ Θ θ   ø Ø     ɸ Φ    ʃ ʆ    Š
    ϵ ϶    Ϲ ϲ Ͻ ͻ    ͼ Ͼ Ͽ ͽ

-}
module RoadToLogic.Sets where

import Data.List (sort, nub, delete)
-- sort :: Ord a => [a] -> [a]
-- nub  :: Eq a => [a] -> [a]
-- delete :: Eq a => a -> [a] -> [a]

-- ---------------------------------------------------------------------------
-- Set type
-- ---------------------------------------------------------------------------
newtype Set a = Set [a] deriving (Read)

s :: Ord a => [a] -> Set a
s = setFromList

-- ---------------------------------------------------------------------------
-- Set instances: Eq, Show
-- ---------------------------------------------------------------------------
-- Equality in terms of subset relation:  (A ⊆ B ∧ B ⊆ A) -> (A = B)
instance Eq a => Eq (Set a) where
    set1 == set2 = isSubset set1 set2
                && isSubset set2 set1

instance (Show a) => Show (Set a) where
    showsPrec _ (Set s) str = showSet s str

showSet :: Show a => [a] -> String -> String
showSet         []     str = showString "∅"  str
showSet         (x:xs) str = showString "{ " (shows x (showl xs str))
    where showl []     str = showString " }" str
          showl (x:xs) str = showString ", " (shows x (showl xs str))


-- setFromList []                           -- {}
-- setFromList [2,2,1,1,3,1,1]              -- { 1, 2, 3 }
-- setFromList [[2,2],[1,1,2],[2,1,3,1,2]]  -- { {1,2}, {1,2,3}, {2} }

-- fromList [ [2,1,2], [1,1,2], [2,1,1,2] ]
--             { {1,2},   {1,2},   {1,2} }
--             { {1,2} }

-- fromList [ fromList [2,1,2], fromList [1,1,2], fromList [2,1,1,2] ]
-- == fromList [fromList [1,2]]


-- ---------------------------------------------------------------------------
-- ctors
-- ---------------------------------------------------------------------------
emptySet :: Set a
emptySet = Set []

ø :: Set a
ø = Set []

singleton :: a -> Set a
singleton x = Set [x]

unorderedPair :: Eq a => a -> a -> Set a
unorderedPair x y | x == y    = Set [x]
                  | otherwise = Set [x, y]

-- ---------------------------------------------------------------------------
-- predicates
-- ---------------------------------------------------------------------------
-- isEmpty A ?
isEmpty :: Set a -> Bool
isEmpty (Set []) = True
isEmpty _ = False

_ = isEmpty ø   -- True


-- x ∈ A ?
isInSet :: (Eq a) => a -> Set a -> Bool
isInSet x (Set s) = x `elem` s

(∈) :: (Eq a) => a -> Set a -> Bool
(∈) = isInSet

_ = 5 ∈ Set [1,5,2,5,3,4]  -- True


-- A ⊆ B ?
isSubset :: (Eq a) => Set a -> Set a -> Bool
isSubset (Set [])     _   = True
isSubset (Set (x:xs)) set = (x ∈ set) && (Set xs) `isSubset` set

(⊆) :: (Eq a) => Set a -> Set a -> Bool
(⊆) = isSubset

_ = Set [1,5,2,4] ⊆ Set [1,5,2,5,3,4]  -- True


-- ---------------------------------------------------------------------------
-- setFromList = list |> sort |> dedup |> Set
-- ---------------------------------------------------------------------------
setFromList :: Ord a => [a] -> Set a
setFromList lst = Set (sort $ nub lst)

_ = setFromList [2,2,1,1,2,2,1,3,1,1,2,1,1,2]  -- { 1, 2, 3 }
_ = setFromList [ [2,1], [1,2] ]

list2set :: Eq a => [a] -> Set a
list2set [] = Set []
list2set (x:xs) = insertInSet x (list2set xs)

-- list2set [ [2,1], [1,2] ]                      -- { [2,1], [1,2] }
-- list2set [ list2set [2,1], list2set [1,2] ]    -- { { 1, 2 } }

-- ---------------------------------------------------------------------------
-- set ops
-- ---------------------------------------------------------------------------
-- insert (prepend) an element if not already a member
insertInSet :: (Eq a) => a -> Set a -> Set a
insertInSet x (Set ys) | isInSet x (Set ys) = Set ys
                     | otherwise = Set (x:ys)

deleteInSet :: Eq a => a -> Set a -> Set a
deleteInSet x (Set xs) = Set (delete x xs)

-- ---------------------------------------------------------------------------
-- powerset
-- ---------------------------------------------------------------------------
powerSet :: Eq a => Set a -> Set (Set a)
powerSet (Set xs) = Set (map (\xs -> (Set xs)) (powerList xs))

powerList :: [a] -> [[a]]
powerList [] = [[]]
powerList (x:xs) = powerList xs ++ map (x:) (powerList xs)

-- ---------------------------------------------------------------------------
-- bizzare coz sets are unordered, no indexing, no splicing
-- ---------------------------------------------------------------------------
takeFromSet :: Eq a => Int -> Set a -> Set a
takeFromSet n (Set xs) = Set (take n xs)

(!!!) :: Eq a => Set a -> Int -> a
(Set xs) !!! n = xs !! n
infixl 9 !!!
