class Monoids {
    
    //val
    // type  // = 'Number'
    // op    // = y => [this.$value, y]
    // mempty

    constuctor(x) {
        this.val = x
    }
        // this.type = typeof x
        // this.op = (x,y) => x+y
        // this.mempty = 0

    static of = x => new Monoids(x)

    // toString :: Pair a b ~> String
    toString = () => `Monoids(${this.val})`
}

// ============================================================================
var m1 = new Monoids(42)

console.log('\n',
   m1.val            , '\n',
   Monoids.of(44)    , '\n',
)
