/*
Monad typeclass
===============

(>=>) :: (a -> m b) -> (b -> m c) -> m c
(>>=) ::       m b  -> (b -> m c) -> m c
(>>=) ::       m a  -> (a -> m b) -> m b

class Applicative m => Monad m where
    unit :: a -> m a
    join :: m (m a) -> m a
    bind :: m a -> (a -> m b) -> m b


a = x => x + 5
b = x => x * 3
c = b . a (x)   (2) ≡ 21


f = x => [x + 5, 'a called. ']
g = x => [x * 3, 'b called. ']
c != b . a

g >=> f (x)   (2) ≡ 

*/
// ----------------------------------------------------------------------- Pair

const i = x => [x, '']
const ma = x => [x + 5, 'ma called. ']
const mb = x => [x * 3, 'mb called. ']
const mc = x => [x ** 2, 'mc called. ']


const bind_pair = g => f => x => {
    let [y, sy] = f(x)
    let [z, sz] = g(y)
    return [z, sy+sz]
}


console.log('\n',
    ma(2), '\n',
    mb(2), '\n',
    bind_pair (mb) (ma) (2), '\n',
)

// ----------------------------------------------------------------------- Pair
const bind_pairs = f3 => f2 => f1 => x1 => {
    let [y1, sy1] = f1(x1)
    let [y2, sy2] = f2(y1)
    let [y3, sy3] = f3(y2)
    return [y3, sy1+sy2+sy3]
}

console.log('\n',
    bind_pairs (mc) (mb) (ma) (2), '\n',
)
