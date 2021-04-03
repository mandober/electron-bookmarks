# Function-Orientated Programming

JS orientated FP with lo-fi hi-fu's

## But how about them apples?

### Tuple vs Curry: 1 n-tuple OR n 1-tuples

Functions: *params declaration* ∧ *call site* i.e., declare function's params as a series of unary tuples, one per param, or a "normal" polyadic tuple, one for all. Basically, one-for-each or one-for-all: `!∃ | ∀`.

**Option 1**: curry i.e. `n` 1-tuples

A two-in-one example: come and see, param declaration and the call site:

```js
const foldr = f => z => ([x, ...xs]) =>     // curried param declaration
    x === undefined
        ? z
        : f (x) (foldr (f) (z) (xs))        // curried call site
```


**Option 2**: tuple i.e. 1 `n`-tuple

```js
const foldr = (f, z, [x, ...xs]) =>     // tupled param declaration
    x === undefined
        ? z
        : f(x, foldr(f, z, xs))         // tupled call site
```

As usual, middle ground probably best, which would mean *curry-sprinkled*.


**Option 3**: tuple param declaration but curry-sprinkled call sites

```js
const foldr = (f, z, [x, ...xs]) =>
    x === undefined
        ? z
        : curry(f) (x, curry(foldr) (f, z) (xs))
```


### The Wrong Type

Oh, noes, supplied argument has the wrong type!

1. Unapologetically throw a tantrum right then and there, explode about swearing, take no prisoners, tear down everything. kaboom.
2. Make sure no one's watching then do a quick coverup, pushing the official version about him not even something something her age.

Options #1 seems appropriate in this uncertain JS world, possibly decorated with sharp teeth that indicate the error in an unpleasant way, and for that the employment of assertions, no, *contracts*, yes!, are due. Also contracts bring to the table an quasi regular type system, granular, with ℕ and ℤ, possibly ℚ and ℝ, hell even ℂ; the ability to require an injective function, demand a sum type, perhaps a Bool ╳ ℕ cross product.


## Symbolic Operators

*sweet.js* or *Babel* plugin for JS macro galore, primarily for mass producing operators that would put Haskell to shame. Sure, it'd be nice to see composition as `g ∘ f` or `g . f` even, instead of the horrid `compose(g, f)`, however and naturally, this begs for *operator overkill* (that's why Haskell's popularity's on the raise; nothing quite like infixable operators y'all).

- https://www.sweetjs.org/
- https://github.com/fantasyland/sweet-fantasies
