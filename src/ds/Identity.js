import util from 'util'

// Identity Functor
class Identity {
    $value

    constructor(x) { this.$value = x }

    get val() { return this.$value }

    // value :: Identity a ~> a
    value = () => this.$value

    // toString :: Identity a ~> String
    toString = () => `Identity(${this.$value})`

    // toString :: Identity a ~> Number
    valueOf = () => Number(this.$value)

    // eq :: (Eq a) => Identity a ~> Identity b -> Bool
    eq = other => this.$value === other.$value


    // Pointed Identity, Identity.of :: a -> Identity a
    static of = x => new Identity(x)

    // Functor Identity, map :: Identity a ~> (a -> b) -> Identity b
    map = f => Identity.of(f(this.$value))

    // Applicative Identity, ap :: Identity a ~> (a -> b) -> Identity b
    ap = f => f.map(this.$value)

    // Monad Identity, chain :: Identity a ~> (a -> b) -> Identity b
    chain = f => this.map(f).join()

    // join :: Identity a ~> a
    join = () => this.$value

    // Traversable Identity, sequence :: Identity a ~> ???
    sequence = of => this.traverse(of, identity)

    // traverse :: Identity a ~> ???
    traverse = (of, f) => (this.$value).map(Identity.of)

}


let i1 = Identity.of(42)
let i2 = Identity.of(x=>x+11)
let i3 = Identity.of(x=>x+5).ap(Identity.of(x=>x+6))


console.log('\n',
    i1.value(), '\n',
    i2.value(), '\n',
    i3.value(), '\n',
    i1.map(x => x + 10).value(), '\n',
    i2.map(x => x + 10).value(), '\n',
    i2.ap(i1).value(), '\n',
)
