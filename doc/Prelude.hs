-- Prelude.hs

-- FUNCTIONALS

id      :: a -> a
konst   :: a -> b -> a
apply   :: (a -> b) -> a -> b
compose :: (b -> c) -> (a -> b) -> a -> c
flip    :: (a -> b -> c) -> (b -> a -> c)
curry   :: ((a, b) -> c) -> (a -> b -> c)
uncurry :: (a -> b -> c) -> ((a, b) -> c)
until   :: (a -> Bool) -> (a -> a) -> a -> a


-- LISTS

elem :: a -> [a] -> Bool
(!!) :: [a] -> Int -> a
(++) :: [a] -> [a] -> [a]

map     :: (a -> b) -> [a] -> [b]
filter  :: (a -> Bool) -> [a] -> [a]
reverse :: [a] -> [a]

isNull :: [a] -> Bool
length :: [a] -> Int

head :: [a] -> a
tail :: [a] -> [a]
init :: [a] -> [a]
last :: [a] -> a

-- Special folds
and :: [Bool] -> Bool
or  :: [Bool] -> Bool

any :: (a -> Bool) -> [a] -> Bool
all :: (a -> Bool) -> [a] -> Bool


__ :: [a] -> [a] -> [a]

cons :: a -> [a] -> [a]
snoc :: [a] -> a -> [a]


concat    :: [[a]] -> [a]

concatMap :: (a -> [b]) -> [a] -> [b]


-- BUILDING LISTS

-- Scans
scanl  :: (b -> a -> b) -> b -> [a] -> [b]
scanl1 :: (a -> a -> a) -> [a] -> [a]

scanr  :: (a -> b -> b) -> b -> [a] -> [b]
scanr1 :: (a -> a -> a) -> [a] -> [a]

-- Infinite lists
repeat    ::             a  -> [a]
cycle     ::            [a] -> [a]
iterate   :: (a -> a) -> a  -> [a]
replicate ::      Int -> a  -> [a]

-- Sublists
take
drop

takeWhile
dropWhile

splitAt
span
break

-- Searching lists
notElem :: (Foldable t, Eq a) => a -> t a -> Bool
lookup  :: Eq a => a -> [(a, b)] -> Maybe b

-- Zipping and unzipping lists
zip
zip3

zipWith
zipWith3

unzip
unzip3

-- Functions on strings
lines
unlines

words
unwords



-- Standard types, classes and related functions

Maybe (Nothing, Just),
maybe :: b -> (a -> b) -> Maybe a -> b

Either (Left, Right),
either :: (a -> c) -> (b -> c) -> Either a b -> c

Ordering (LT, EQ, GT)

Ord
compare :: Ord a => a -> a -> Ordering
min :: Ord a => a -> a -> a
max :: Ord a => a -> a -> a


Enum
succ
pred
toEnum
fromEnum
enumFrom
enumFromThen
enumFromTo
enumFromThenTo

Bounded
minBound
maxBound

-- Numeric type classes

Num
(+)
(-)
(*)
negate
abs
signum


-- Numeric functions
subtract :: Num a => a -> a -> a
even :: Integral a => a -> Bool
odd  :: Integral a => a -> Bool
gcd :: Integral a => a -> a -> a
lcm :: Integral a => a -> a -> a

-- Algebras

Semigroup
(<>) :: Semigroup a => a -> a -> a
__ :: (Semigroup a) => a -> a -> a
__ :: [a] -> [a] -> [a]


Monoid
mempty  :: Monoid a => a
mappend :: Monoid a => a -> a -> a
mconcat :: Monoid a => [a] -> a

Functor
fmap :: Functor f => (a -> b) -> f a -> f b
(<$) :: Functor f => a -> f b -> f a

Applicative
pure  :: Applicative f => a -> f a
(<*>) :: Applicative f => f (a -> b) -> f a -> f b
(*>)  :: Applicative f => f a -> f b -> f b
(<*)  :: Applicative f => f a -> f b -> f a

Monad
(>>=)  :: Monad m => m a -> (a -> m b) -> m b
(=<<)  :: Monad m => (a -> m b) -> m a -> m b
(>>)   :: Monad m => m a -> m b -> m b
return :: Monad m => a -> m a
fail   :: MonadFail m => String -> m a
mapM_     :: (Foldable t, Monad m) => (a -> m b) -> t a -> m ()
sequence_ :: (Foldable t, Monad m) => t (m a) -> m ()


-- Foldable

elem :: (Foldable t, Eq a) => a -> t a -> Bool

foldl   :: (b -> a -> b) -> b -> t a -> b
foldl1  :: (a -> a -> a) -> t a -> a
foldr   :: (a -> b -> b) -> b -> t a -> b
foldr1  :: (a -> a -> a) -> t a -> a
foldMap :: Monoid m => (a -> m) -> t a -> m

maximum :: (Foldable t, Ord a) => t a -> a
minimum :: (Foldable t, Ord a) => t a -> a

product :: (Foldable t, Num a) => t a -> a
sum :: Num a => t a -> a

Traversable (
traverse  :: (Traversable t, Applicative f) => (a -> f b) -> t a -> f (t b)
sequenceA :: (Traversable t, Applicative f) => t (f a) -> f (t a)
mapM      :: (Traversable t, Monad m) => (a -> m b) -> t a -> m (t b)
sequence  :: (Traversable t, Monad m) => t (m a) -> m (t a)
