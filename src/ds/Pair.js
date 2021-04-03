// Pair
import curry from '../../src/f/curry.js'


class Pair {
    a
    b

    // new Pair :: (a, b) -> Pair a b
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    // fst :: Pair a b ~> a
    get fst() { return this.a }

    // snd :: Pair a b ~> b
    get snd() { return this.b }

    // of :: a -> b -> Pair a b
    static of = curry((a, b) => new Pair(a, b))

    // fromArray :: [a, b] -> Pair a b
    static fromArray = ([a, b, _]) => new Pair(a, b)

    // toArray :: Pair a b ~> [a, b]
    toArray = () => [this.fst, this.snd]

    // toString :: Pair a b ~> String
    toString = () => `Pair(${this.fst}, ${this.snd})`

    // toString :: Pair a b ~> Number
    valueOf = () => [Number(this.fst), Number(this.snd)]
      //(function() { throw new Error `Cannot convert a pair to a number`})

    // eq :: (Eq a, Eq b) => Pair a b ~> Pair a b -> Bool
    eq = other => this.fst === other.fst && this.snd === other.snd


    // swap :: Pair a b ~> Pair b a
    swap = () => new Pair(this.snd, this.fst)

    // map :: Pair a b ~> (b -> c) -> Pair a c
    map = f => new Pair(this.fst, f(this.snd))

    // bimap :: Pair a b ~> (a -> c) -> (b -> d) -> Pair c d
    bimap = f => g => new Pair(f(this.fst), g(this.snd))

    // compose :: Pair a b ~> Pair b c -> Pair a c
    compose = p => new Pair(this.fst, p.snd)

    // ap :: Semigroup a => Pair a b ~> Pair a (b -> c) -> Pair a c
    // chain :: Semigroup a => Pair a b ~> (b -> Pair a c) -> Pair a c
    
    // reduce :: Pair a b ~> ((c,b) -> c, c) -> c
    // reduce(f, x, Pair(v,w)) ≡ f(x, w)

    // traverse :: Applic f => Pair a b ~> (TypeRep f,b -> f c) -> f (Pair a c)
    // extend :: Pair a b ~> (Pair a b -> c) -> Pair a c
    // extract :: Pair a b ~> () -> b

}



let p1 = Pair.fromArray([42, true])
let p2 = Pair.of(33)(false)

console.log('\n',
    p1, '\n',
    p2, '\n',
    p2.fst, '\n',
    p1.toArray(), '\n',
    p2.toArray(), '\n',

)
