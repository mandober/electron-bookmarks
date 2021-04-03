/*
Ord class

class Eq a => Ord a where
    compare :: a -> a -> Ordering
    (<)  :: a -> a -> Bool
    (<=) :: a -> a -> Bool
    (>)  :: a -> a -> Bool
    (>=) :: a -> a -> Bool
    max  :: a -> a -> a
    min  :: a -> a -> a
MINIMAL: compare | <=

*/
const Ordering = {
    LT: -1,
    EQ:  0,
    GT:  1,
}

class Ord extends Eq {
    compare = a => b =>
        a < b ? Ordering.LT : a === b ? Ordering.EQ : Ordering.GT

}
