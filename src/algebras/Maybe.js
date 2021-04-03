/*
Maybe
=====
data Maybe a = Nothing | Just a

Maybe has an instance for:
- Semigroup
- Monoid
- Pointed
- Functor
- Applicative
- Monad
- Foldable
- Traversable

*/

class Maybe {
    // -------------------------------------------------------------- internals
    #value  // field

    constructor(x) { this.#value = x }

    get isNothing() { return this.#value == null }
    get isJust()    { return !this.isNothing }

    toString = () =>
        this.isNothing ? "Nothing" : `Just(${this.#value})`
    
    valueOf = () =>
        this.isNothing ? 0 : Number(this.#value)

    // --------------------------------------------------------------------- Eq
    eq = b => this.#value === b

    // -------------------------------------------------------------------- Ord

    // ---------------------------------------------------------------- Pointed
    static of = x => new Maybe(x)

    // ---------------------------------------------------------------- Functor
    map = f => this.isNothing ? this : Maybe.of(f(this.#value))

    // ------------------------------------------------------------ Applicative
    ap  = f => this.isNothing ? this : f.map(this.#value)

    // ------------------------------------------------------------------ Monad
    chain = f => this.map(f).join()

    join = () => this.isNothing ? this : this.#value

    // ------------------------------------------------------------ Traversable
    sequence = of => this.traverse(of, x => x)

    traverse = (of, f) =>
        this.isNothing ? of(this) : f(this.#value).map(Maybe.of)
}


// ---------------------------------------------------------------------- or
const Just = x => ({
    // map :: Maybe a ~> (a -> b) -> Maybe b
    map: f => Just(f(x)),

    // fold :: Maybe a ~> (b, a -> b) -> b
    fold: (_, f) => f(x)
})

const Nothing = ({
    // map :: Maybe a ~> (a -> b) -> Maybe b
    map: _ => Nothing,

    // Return default value
    // fold :: Maybe a ~> (b, a -> b) -> b
    fold: (d, _) => d
})

// fromNullable :: a? -> Maybe a
const fromNullable = x => x == null ? Nothing : Just(x)


// ---------------------------------------------------------------------- check
let j = new Maybe(42)
let n = new Maybe()


console.log('\n',
    j.toString(), '\n',
    j + j, '\n',
    n.toString(), '\n',
    j + n, '\n',
    fromNullable(undefined).fold(442)
)
