// class Functor (f :: * -> *) where
class Functor {
    #value

    //constructor(x) { this.#value = x }

    // fmap :: (a -> b) -> f a -> f b
    fmap = f => fa => f(fa.#value)

    // (<$) :: b -> f a -> f b
    ['<$'] = b => fa => f(fa.#value)

}

/*
Functor
=======
Functor typeclass is a class for types that
can be mapped over, which define fmap method
and obey the two functor laws.

FUNCTOR LAWS:

(point-free)
1. fmap id = id
2. fmap (g . f) = fmap g . fmap f

(expanded)
1. fmap id F = F
2. fmap (g . f) F = (fmap g . fmap f) F = fmap g (fmap f F)


class Functor (f :: * -> *) where
    fmap :: (a -> b) -> f a -> f b
    (<$) :: a -> f b -> f a

*/
