class IdentityFunctor {
    // name: #value, getter: value
    #value

    constructor(x) { this.#value = x }

    get Value() { return this.#value }

    static of = x => new IdentityFunctor(x)

    map = f => f(this.Value)
}




const o = new IdentityFunctor(42)
const c = IdentityFunctor.of('abcd')



console.log('\n',
    o.Value, '\n',          // 42
    c,       '\n',
    c.Value, '\n',                  // abcd
    c.map(x => x+' efgh'), '\n',    // abcd efgh
)
