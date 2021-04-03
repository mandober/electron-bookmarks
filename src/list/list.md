# Index of array functions

List functions
* Basic functions
  (++), head, tail, init, last, null, length
* List transformations
  map,  reverse,  
intersperse,  intercalate,  transpose,  subsequences,  permutations,  
foldl,  foldl',  foldl1,  foldl1',  foldr,  foldr1,  concat,  concatMap,  
and,  or,  any,  all,  sum,  product,  maximum,  minimum,  scanl,  scanl1,  
scanr,  scanr1,  mapAccumL,  mapAccumR,  iterate,  repeat,  replicate,  
cycle,  unfoldr,  take,  drop,  splitAt,  takeWhile,  dropWhile,  span,  
break,  stripPrefix,  group,  inits,  tails,  isPrefixOf,  isSuffixOf,  
isInfixOf,  elem,  notElem,  lookup,  find,  filter,  partition,  (!!),  
elemIndex,  elemIndices,  findIndex,  findIndices,  zip,  zip3,  zip4,  
zip5,  zip6,  zip7,  zipWith,  zipWith3,  zipWith4,  zipWith5,  zipWith6,  
zipWith7,  unzip,  unzip3,  unzip4,  unzip5,  unzip6,  unzip7,  lines,  
words,  unlines,  unwords,  nub,  delete,  (\\),  union,  intersect,  sort,  
insert,  nubBy,  deleteBy,  deleteFirstsBy,  unionBy,  intersectBy,  
groupBy,  sortBy,  insertBy,  maximumBy,  minimumBy,  genericLength,  
genericTake,  genericDrop,  genericSplitAt,  genericIndex,  genericReplicate



Index of functions that operate on arrays/lists

* Creation
  - fromIterable: from Set, Map, Object, string
  - words: array from string splitting on WS
  - lines: array from string splitting on NL
  - repeat
  - iterate
  - unfoldl
  - unfoldr

* Folding
  - foldl
  - foldr
  - foldl1
  - foldr1
  - scanl
  - scanr
  - scanl1
  - scanr1

* Selection
  - head
  - tail
  - last
  - init
  - drop
  - take

* Adding elements (to existing structure)
  - cons, prepend
  - snoc, append
  - concat, merge/combine two arrays
  - intersperse
  - intercalate

* Structural change
  - flatten (concat)

* Transformations (but keping the same structure)
  - map
  - reverse
  - shuffle
  - sort



## Haskell: List ops

```hs
-- ==================================================================
-- std::List::Signatures
-- ==================================================================

-- Basic functions
(++)   :: [a] -> [a] -> [a]
head   :: [a] -> a
last   :: [a] -> a
tail   :: [a] -> [a]
init   :: [a] -> [a]
uncons :: [a] -> Maybe (a, [a])
null   :: Foldable t => t a -> Bool
length :: Foldable t => t a -> Int

-- List transformations
map          :: (a -> b) -> [a] -> [b]
reverse      :: [a] -> [a]
intersperse  :: a -> [a] -> [a]
intercalate  :: [a] -> [[a]] -> [a]
transpose    :: [[a]] -> [[a]]
subsequences :: [a] -> [[a]]
permutations :: [a] -> [[a]]

-- Folding lists
foldl   :: Foldable t => (b -> a -> b) -> b -> t a -> b
foldl'  :: Foldable t => (b -> a -> b) -> b -> t a -> b
foldl1  :: Foldable t => (a -> a -> a) -> t a -> a
foldl1' :: (a -> a -> a) -> [a] -> a
foldr   :: Foldable t => (a -> b -> b) -> b -> t a -> b
foldr1  :: Foldable t => (a -> a -> a) -> t a -> a

-- Special folds
concat    :: Foldable t => t [a] -> [a]
concatMap :: Foldable t => (a -> [b]) -> t a -> [b]
and       :: Foldable t => t Bool -> Bool
or        :: Foldable t => t Bool -> Bool
any       :: Foldable t => (a -> Bool) -> t a -> Bool
all       :: Foldable t => (a -> Bool) -> t a -> Bool
sum       :: (Foldable t, Num a) => t a -> a
product   :: (Foldable t, Num a) => t a -> a
maximum   :: forall a. (Foldable t, Ord a) => t a -> a
minimum   :: forall a. (Foldable t, Ord a) => t a -> a

-- Building lists: Scans
scanl  :: (b -> a -> b) -> b -> [a] -> [b]
scanl' :: (b -> a -> b) -> b -> [a] -> [b]
scanl1 :: (a -> a -> a) -> [a] -> [a]
scanr  :: (a -> b -> b) -> b -> [a] -> [b]
scanr1 :: (a -> a -> a) -> [a] -> [a]

-- Building lists: Accumulating maps
mapAccumL :: Traversable t => (a -> b -> (a, c)) -> a -> t b -> (a, t c)
mapAccumR :: Traversable t => (a -> b -> (a, c)) -> a -> t b -> (a, t c)

-- Building lists: Infinite lists
iterate   :: (a -> a) -> a -> [a]
iterate'  :: (a -> a) -> a -> [a]
repeat    :: a -> [a]
replicate :: Int -> a -> [a]
cycle     :: [a] -> [a]

-- Building lists: Unfolding
unfoldr :: (b -> Maybe (a, b)) -> b -> [a]

-- Sublists: Extracting sublists
take :: Int -> [a] -> [a]
drop :: Int -> [a] -> [a]
splitAt :: Int -> [a] -> ([a], [a])
takeWhile :: (a -> Bool) -> [a] -> [a]
dropWhile :: (a -> Bool) -> [a] -> [a]
dropWhileEnd :: (a -> Bool) -> [a] -> [a]
span :: (a -> Bool) -> [a] -> ([a], [a])
break :: (a -> Bool) -> [a] -> ([a], [a])
stripPrefix :: Eq a => [a] -> [a] -> Maybe [a]
group :: Eq a => [a] -> [[a]]
inits :: [a] -> [[a]]
tails :: [a] -> [[a]]

-- Sublists: Predicates
isPrefixOf :: Eq a => [a] -> [a] -> Bool
isSuffixOf :: Eq a => [a] -> [a] -> Bool
isInfixOf :: Eq a => [a] -> [a] -> Bool
isSubsequenceOf :: Eq a => [a] -> [a] -> Bool

-- Searching lists: Search by equality
elem :: (Foldable t, Eq a) => a -> t a -> Bool
notElem :: (Foldable t, Eq a) => a -> t a -> Bool
lookup :: Eq a => a -> [(a, b)] -> Maybe b

-- Searching lists: Search with a predicate
find :: Foldable t => (a -> Bool) -> t a -> Maybe a
filter :: (a -> Bool) -> [a] -> [a]
partition :: (a -> Bool) -> [a] -> ([a], [a])

-- Indexing lists
(!!) :: [a] -> Int -> a
elemIndex :: Eq a => a -> [a] -> Maybe Int
elemIndices :: Eq a => a -> [a] -> [Int]
findIndex :: (a -> Bool) -> [a] -> Maybe Int
findIndices :: (a -> Bool) -> [a] -> [Int]

-- Zipping and unzipping lists
zip :: [a] -> [b] -> [(a, b)]
zip3 :: [a] -> [b] -> [c] -> [(a, b, c)]
zip4 :: [a] -> [b] -> [c] -> [d] -> [(a, b, c, d)]
zip5 :: [a] -> [b] -> [c] -> [d] -> [e] -> [(a, b, c, d, e)]
zip6 :: [a] -> [b] -> [c] -> [d] -> [e] -> [f] -> [(a, b, c, d, e, f)]
zip7 :: [a] -> [b] -> [c] -> [d] -> [e] -> [f] -> [g] -> [(a, b, c, d, e, f, g)]
zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
zipWith3 :: (a -> b -> c -> d) -> [a] -> [b] -> [c] -> [d]
zipWith4 :: (a -> b -> c -> d -> e) -> [a] -> [b] -> [c] -> [d] -> [e]
zipWith5 :: (a -> b -> c -> d -> e -> f) -> [a] -> [b] -> [c] -> [d] -> [e] -> [f]
zipWith6 :: (a -> b -> c -> d -> e -> f -> g) -> [a] -> [b] -> [c] -> [d] -> [e] -> [f] -> [g]
zipWith7 :: (a -> b -> c -> d -> e -> f -> g -> h) -> [a] -> [b] -> [c] -> [d] -> [e] -> [f] -> [g] -> [h]
unzip :: [(a, b)] -> ([a], [b])
unzip3 :: [(a, b, c)] -> ([a], [b], [c])
unzip4 :: [(a, b, c, d)] -> ([a], [b], [c], [d])
unzip5 :: [(a, b, c, d, e)] -> ([a], [b], [c], [d], [e])
unzip6 :: [(a, b, c, d, e, f)] -> ([a], [b], [c], [d], [e], [f])
unzip7 :: [(a, b, c, d, e, f, g)] -> ([a], [b], [c], [d], [e], [f], [g])

-- Special lists: Functions on strings
lines :: String -> [String]
words :: String -> [String]
unlines :: [String] -> String
unwords :: [String] -> String

-- Special lists: Set operations
nub :: Eq a => [a] -> [a]
delete :: Eq a => a -> [a] -> [a]
(\\) :: Eq a => [a] -> [a] -> [a]
union :: Eq a => [a] -> [a] -> [a]
intersect :: Eq a => [a] -> [a] -> [a]

-- Special lists: Ordered lists
sort :: Ord a => [a] -> [a]
sortOn :: Ord b => (a -> b) -> [a] -> [a]
insert :: Ord a => a -> [a] -> [a]

-- Generalized functions: The "By" operations
nubBy :: (a -> a -> Bool) -> [a] -> [a]
deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
deleteFirstsBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
unionBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
intersectBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
groupBy :: (a -> a -> Bool) -> [a] -> [[a]]

-- Generalized functions: User-supplied comparison
sortBy :: (a -> a -> Ordering) -> [a] -> [a]
insertBy :: (a -> a -> Ordering) -> a -> [a] -> [a]
maximumBy :: Foldable t => (a -> a -> Ordering) -> t a -> a
minimumBy :: Foldable t => (a -> a -> Ordering) -> t a -> a

-- Generalized functions: generic operations
genericLength :: Num i => [a] -> i
genericTake :: Integral i => i -> [a] -> [a]
genericDrop :: Integral i => i -> [a] -> [a]
genericSplitAt :: Integral i => i -> [a] -> ([a], [a])
genericIndex :: Integral i => [a] -> i -> a
genericReplicate :: Integral i => i -> a -> [a]
```
