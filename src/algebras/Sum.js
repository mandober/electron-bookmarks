/*
Sum monoid
==========
Sum = { ℕ, +, 0 }

Sum is a monoid of integers under addition.

closure:
∀x,∀y :: a -> (x <> y) :: a

right identity:
m <> mempty ≡ m
m['fantasy-land/concat'](M['fantasy-land/empty']()) is equivalent to m

left identity:
mempty <> m ≡ m
M['fantasy-land/empty']()['fantasy-land/concat'](m) is equivalent to m

associativity:
a <> b <> c = (a <> b) <> c = a <> (b <> c)

*/
class Monoid {
    value
    // type  // = 'Number'
    // op    // = y => [this.$value, y]
    // mempty

    constuctor(v) {
        this.value = v
        // this.type = typeof x
        // this.op = (x,y) => x+y
        // this.mempty = 0
    }

    // toString :: Pair a b ~> String
    toString = () => `Monoid(${this.value})`


}


/*
class Sum extends Monoid {
    constuctor(x) {
        //super()
        this.$value = x
        this.$type = typeof x
        this.$op = (x,y) => x+y
        this.$mempty = 0
    }
}
*/




// const isAssoc = x => y => z =>
//     x.append(y).append(z).value === x.append(y.append(z)).value



/*
    const Su = x => ({
        val: x,
        append : y => Su(x + y.val),
        mappend: append,
        ['<>'] : append,

    })
    Su.identity = Su(0)
    Su.mempty   = Su.identity
*/

/*
    const Sums = {
        // Monoid Sum = { ℕ, +, 0 }
        // carrier type : Nat (Number, BigInt > 0)
        // operation    : addition (+), also as <> or mappend
        // identity     : 0 or mempty
        
        // mempty :: Monoid a => a
        mempty  : () => 0,

        // mappend :: Semigroup a => a -> a -> a
        mappend : m => n => m + n,
        // (<>)    :: Semigroup a => a -> a -> a
        ['<>']      : m => n => m + n,

        // mconcat :: Monoid a => [a] -> a
    }
*/

// ============================================================================
// let s1 = new Monoid(555)
let m1 = new Monoid(42)

console.log('\n',
   m1, '\n',
)
