/*
Derivations https://github.com/fantasyland/fantasy-land

fmap ::   (a ->   b) -> f a -> f b
ap   :: f (a ->   b) -> f a -> f b
bind ::   (a -> f b) -> f a -> f b

id: (a => a)
lift id: pure(a => a)
lift output: (a => return(a))

*/


// eq may be derived from Ord's le:
// eq = a <= b && b <= a
function equals(other) {
    return this['fantasy-land/lte'](other)
    &&    other['fantasy-land/lte'](this)
}

// fmap may be derived from ap (<*>) and of (pure):
// map f = (ap . of)(f) = ap(of(f))
// map = ap . of
function map_ap(f) {
    return this['fantasy-land/ap']
    (this.constructor['fantasy-land/of'](f))
}


// fmap may be derived from chain (bind, >>=) and of (return):
// fmap f        = bind (a => return(a)
// fmap (a => a) ≡ bind (a => return(a)
function map_bind(f) {
    return this['fantasy-land/chain']
    (a => this.constructor['fantasy-land/of'](f(a)))
}

// fmap may be derived from bimap:
function map_bimap(f) {
    return this['fantasy-land/bimap'](a => a, f)
}

// fmap may be derived from promap:
function map_promap(f) {
    return this['fantasy-land/promap'](a => a, f)
}

// ap may be derived from chain:
function ap(m) {
    return m['fantasy-land/chain'](f => this['fantasy-land/map'](f))
}
