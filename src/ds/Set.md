# Data.Set


```hs
type role Set nominal

data Set a
  = Data.Set.Internal.Bin {-# UNPACK #-}Data.Set.Internal.Size
                          !a
                          !(Set a)
                          !(Set a)
  | Data.Set.Internal.Tip

difference          :: Ord a => Set a -> Set a -> Set a
intersection        :: Ord a => Set a -> Set a -> Set a
(\\)                :: Ord a => Set a -> Set a -> Set a
union               :: Ord a => Set a -> Set a -> Set a

disjointUnion       :: Set a -> Set b -> Set (Either a b)
unions              :: (Foldable f, Ord a) => f (Set a) -> Set a

powerSet            :: Set a -> Set (Set a)
cartesianProduct    :: Set a -> Set b -> Set (a, b)
partition           :: (a -> Bool) -> Set a -> (Set a, Set a)

deleteAt            :: Int -> Set a -> Set a
delete              :: Ord a => a -> Set a -> Set a

deleteFindMax       :: Set a -> (a, Set a)
deleteFindMin       :: Set a -> (a, Set a)

deleteMax           :: Set a -> Set a
deleteMin           :: Set a -> Set a

Data.Set.map        :: Ord b => (a -> b) -> Set a -> Set b


empty               :: Set a
elemAt              :: Int -> Set a -> a
elems               :: Set a -> [a]

Data.Set.drop       :: Int -> Set a -> Set a
Data.Set.take       :: Int -> Set a -> Set a

Data.Set.filter     :: (a -> Bool) -> Set a -> Set a
dropWhileAntitone   :: (a -> Bool) -> Set a -> Set a
takeWhileAntitone   :: (a -> Bool) -> Set a -> Set a

findMax             :: Set a -> a
findMin             :: Set a -> a
findIndex           :: Ord a => a -> Set a -> Int

Data.Set.foldl      :: (a -> b -> a) -> a -> Set b -> a
foldl'              :: (a -> b -> a) -> a -> Set b -> a
Data.Set.foldr      :: (a -> b -> b) -> b -> Set a -> b
foldr'              :: (a -> b -> b) -> b -> Set a -> b
fold                :: (a -> b -> b) -> b -> Set a -> b

fromList            :: Ord a => [a] -> Set a
fromAscList         :: Eq a => [a] -> Set a
fromDescList        :: Eq a => [a] -> Set a
fromDistinctAscList :: [a] -> Set a
fromDistinctDescList:: [a] -> Set a

toAscList           :: Set a -> [a]
toDescList          :: Set a -> [a]
toList              :: Set a -> [a]

insert              :: Ord a => a -> Set a -> Set a

Data.Set.null       :: Set a -> Bool
disjoint            :: Ord a => Set a -> Set a -> Bool
isSubsetOf          :: Ord a => Set a -> Set a -> Bool
isProperSubsetOf    :: Ord a => Set a -> Set a -> Bool
valid               :: Ord a => Set a -> Bool
member              :: Ord a => a -> Set a -> Bool
notMember           :: Ord a => a -> Set a -> Bool

lookupGE            :: Ord a => a -> Set a -> Maybe a
lookupGT            :: Ord a => a -> Set a -> Maybe a
lookupIndex         :: Ord a => a -> Set a -> Maybe Int
lookupLE            :: Ord a => a -> Set a -> Maybe a
lookupLT            :: Ord a => a -> Set a -> Maybe a
lookupMax           :: Set a -> Maybe a
lookupMin           :: Set a -> Maybe a

mapMonotonic        :: (a -> b) -> Set a -> Set b


maxView             :: Set a -> Maybe (a, Set a)
minView             :: Set a -> Maybe (a, Set a)

showTree            :: Show a => Set a -> String
showTreeWith        :: Show a => Bool -> Bool -> Set a -> String

singleton           :: a -> Set a
size                :: Set a -> Int
spanAntitone        :: (a -> Bool) -> Set a -> (Set a, Set a)

splitRoot           :: Set a -> [Set a]
split               :: Ord a => a -> Set a -> (Set a, Set a)
splitMember         :: Ord a => a -> Set a -> (Set a, Bool, Set a)
Data.Set.splitAt    :: Int -> Set a -> (Set a, Set a)
```
