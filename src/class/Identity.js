// Base class - Identity Functor
//-----------------------------------------------------------------------------
export const fids = {
    eq : Symbol.for('eq'),
    ne : Symbol.for('ne'),
}

export const map = Symbol.for('map');

//-----------------------------------------------------------------------------
export class Identity {
    // field
    #_value;

    // ctor
    constructor(x) { this.#_value = [x] }

    // named ctor of :: a -> f a
    static of = x => new Identity(x);

    // getter
    get Value() {
        return this.#_value[0]
            ? this.#_value[0]
            : this.#_value
    }

    static get Info() { return `Base class, Identity.` }

    // lazy getter :: f a ~> a
    value = () => this.Value;

    // toString :: f a ~> String
    toString = () => `Identity(${this.Value})`;
    // toString :: Identity a ~> Number
    valueOf = () => Number(this.Value);

    // Eq (f a) defined only if Eq a is defined
    // eq :: (Eq a) => f a ~> f a -> Bool
    [fids.eq] = other => this.Value === other.Value;

    [fids.ne] = other => this.Value !== other.Value;

    // map :: f a ~> (a -> b) -> f b
    [map] = f => Identity.of( f(this.Value) );

}


//-----------------------------------------------------------------------------
// prop descriptor
Object.defineProperties(Identity, {
    'of'   : { enumerable: false },
    'value': { enumerable: false },
    [fids.eq]   : { enumerable: false },
    [fids.ne]   : { enumerable: false },
    [map]       : { enumerable: false },
});

//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
/*
for (let key in Identity) console.log(key)

let i0 = new Identity(52)
let i1 = Identity.of(42)
let i2 = Identity.of(x=>x+11)

console.log('\n',
    i0, '\n',
    i0.Value, '\n',
    Identity.Info, '\n',
    i1.Value, '\n',
    i2.toString(), '\n',
    '[map]',i1[map](x => x + 10).Value, '\n',
    // i2.map(x => x + 10).Value, '\n',
    // i0.eq(i1), '\n',
    // i0.eq(i1.map(x=>x+10)), '\n',
    // i0.ne(i1.map(x=>x+10)), '\n',
    // Identity.of.toString(), '\n',
    // Object.getOwnPropertyDescriptor(Object, 'toString')
)
*/
