/*
Monoid
======
A monoid consists of the carrier type a,
an associative binary operation <> closed over that type a,
where the type and operator respect the axions of:
- closure: ∀xy :: a -> (x <> y) :: a
- associativity: ∀xyz . x <> y <> z = (x <> y) <> z = x <> (y <> z)
- identity: the identity element, mempty, such that:
  ∀x :: a -> mempty <> x ≡ x ≡ x <> mempty


-------------------------------------------------------------------------------
fantasy land spec for Monoid
-------------------------------------------------------------------------------
m['fantasy-land/concat'](M['fantasy-land/empty']()) ≡ m   (right identity)
M['fantasy-land/empty']()['fantasy-land/concat'](m) ≡ m   (left  identity)

Right-identity:     m.concat(M.empty()) ≡ m
Left-identity :     M.empty().concat(m) ≡ m

mempty <> m ≡ m ≡ m <> mempty

fantasy-land/empty :: Monoid m => () -> m
empty :: Monoid m => () -> m

M['fantasy-land/empty']() ~~> M['empty']() ~~> M.empty()

where M is a type representative of a Monoid
accessable via `constructor` property.

Given a value m, its type representative is accessed via `constructor` prop:
m.constructor['fantasy-land/empty']()

'fantasy-land/empty' must return a value of the same Monoid.

-------------------------------------------------------------------------------
M = { S, <>, ϵ } = { T, mappend (<>), mempty }
-------------------------------------------------------------------------------
- closure:          ∀xy ∈ S | x <> y ∈ S
- associativity:   ∀xyz ∈ S | (x <> y) <> z ≡ x <> (y <> z) ≡ x <> y <> z
- identity:      ∀x ∃!ϵ ∈ S | x <> ϵ = x = ϵ <> x
total identity = left identity and right identity

A type that is an instance of the Monoid typeclass:
- mempty: monoidal identity element
- mappend: monoidal binary operation

Monoid Sum     = { ℕ, +, 0 } = { Nat,  + , 0 }
Monoid Product = { ℕ, ×, 1 } = { Nat,  * , 0 }
Monoid Every   = { 𝔹, ∧, ⊤ } = { Bool, &&, true }
Monoid Some    = { 𝔹, ∨, ⊥ } = { Bool, ||, false }

Monoid of functions under composition = { Φ, ∘, 1 }
Monoid of strings under concatenation = { String, concat, "" }
Monoid of lists under concatenation   = { List, ++, [] }

Monoid of Maybe under "conjunction", ◧ = { Maybe, ◧, Nothing }
j ◧ j'= j       where:
j ◧ n = j       j,j' are Just(x)
n ◧ j = j       and
n ◧ n = n       n is Nothing

-------------------------------------------------------------------------------
M = { a, mappend (<>), mempty }

Sum = {
    T :: Nat
    mappend :: T -> T -> T
    mappend = +
    mempty :: T
    mempty = 0
}
*/

const Sum = x => ({
    value: x,
    append: y => Sum(x + y.value),
    //static of: x => new Sum(x),
    //empty: Sum(0)
})

Sum.mempty = Sum(0)
Sum.identity = Sum(0)

// Make sure it's associative:
// For any x, y, and z of the same monoid:
const isAssoc = x => y => z =>
    x.append(y).append(z).value === x.append(y.append(z)).value
// without .value, we'd get neq objects



// ----------------------------------------------------------------------------
console.log(
    Sum(3).append(Sum(5)).value,
    isAssoc (Sum(2)) (Sum(4)) (Sum(5)),
)


// ----------------------------------------------------------------------------
// Product monoid. Just like sum, but with
// multiplication, so the identity is 1.
const Product = x => ({
    append: y => Product(x * y.value),
    value: x
})

Product.identity = Product(1)


// ----------------------------------------------------------------------------
// Max monoid. Appending returns the biggest
// of the two Max values. Straightforward.
const Max = x => ({
    append: y => x > y.value ? x : y,
    value: x
})

Max.identity = Max(-Infinity)

// ----------------------------------------------------------------------------
// no good
// no good
// "Average" monoid, more complex, but it still obeys the laws
const Average = (sum, length = 1) => ({
    append: that => Average(  // no good
        sum + that.sum,       // no good
        length + that.length  // no good
    ),
    length,
    sum,
    value: length && sum / length
})

Average.identity = Average(0, 0)
// no good
// no good

// ----------------------------------------------------------------------------
// Function for folding with monoids. Starts with the identity, wraps the
// others, and appends one by one. Could be optimised by fusing the loops
const fold = (M, xs) => xs
    .map(x => M(x))      // cannot just use M - breaks Average
    .reduce((acc, x) => acc.append(x), M.identity)


// ----------------------------------------------------------------------------
const ns = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(
    fold(Sum,       ns).value,
    fold(Product,   ns).value,
    fold(Max,       ns).value,
    fold(Average,   ns).value,

    '\n',
    Average(15,3).value,  '\n',
    Average(6,2).value,  '\n',
    Average(6,2).append(Average(15,3)).value,  '\n', // no good
)
