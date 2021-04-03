-- Data.Foldable

class Foldable (t :: * -> *) where
  Data.Foldable.fold :: Monoid m => t m -> m
  foldMap :: Monoid m => (a -> m) -> t a -> m
  foldr :: (a -> b -> b) -> b -> t a -> b
  Data.Foldable.foldr' :: (a -> b -> b) -> b -> t a -> b
  foldl :: (b -> a -> b) -> b -> t a -> b
  Data.Foldable.foldl' :: (b -> a -> b) -> b -> t a -> b
  foldr1 :: (a -> a -> a) -> t a -> a
  foldl1 :: (a -> a -> a) -> t a -> a
  Data.Foldable.toList :: t a -> [a]
  null :: t a -> Bool
  length :: t a -> Int
  elem :: Eq a => a -> t a -> Bool
  maximum :: Ord a => t a -> a
  minimum :: Ord a => t a -> a
  sum :: Num a => t a -> a
  product :: Num a => t a -> a
{-# MINIMAL foldMap | foldr #-}


all :: Foldable t => (a -> Bool) -> t a -> Bool
and :: Foldable t => t Bool -> Bool
any :: Foldable t => (a -> Bool) -> t a -> Bool

Data.Foldable.asum ::
  (Foldable t, GHC.Base.Alternative f) => t (f a) -> f a

concat :: Foldable t => t [a] -> [a]

concatMap :: Foldable t => (a -> [b]) -> t a -> [b]

Data.Foldable.find :: Foldable t => (a -> Bool) -> t a -> Maybe a

Data.Foldable.foldlM ::
  (Foldable t, Monad m) => (b -> a -> m b) -> b -> t a -> m b

Data.Foldable.foldrM ::
  (Foldable t, Monad m) => (a -> b -> m b) -> b -> t a -> m b

Data.Foldable.forM_ ::
  (Foldable t, Monad m) => t a -> (a -> m b) -> m ()

Data.Foldable.for_ ::
  (Foldable t, Applicative f) => t a -> (a -> f b) -> f ()

mapM_ :: (Foldable t, Monad m) => (a -> m b) -> t a -> m ()

Data.Foldable.maximumBy ::
  Foldable t => (a -> a -> Ordering) -> t a -> a

Data.Foldable.minimumBy ::
  Foldable t => (a -> a -> Ordering) -> t a -> a

Data.Foldable.msum ::
  (Foldable t, GHC.Base.MonadPlus m) => t (m a) -> m a

notElem :: (Foldable t, Eq a) => a -> t a -> Bool

or :: Foldable t => t Bool -> Bool

Data.Foldable.sequenceA_ ::
  (Foldable t, Applicative f) => t (f a) -> f ()

sequence_ :: (Foldable t, Monad m) => t (m a) -> m ()

Data.Foldable.traverse_ ::
  (Foldable t, Applicative f) => (a -> f b) -> t a -> f ()
