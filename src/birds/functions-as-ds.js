/* Functions as data structures 
   Church pair and list */

// true :: a -> b -> a
const T = a => b => a
// false :: a -> b -> b
const F = a => b => b

// cpair :: a -> b -> (a -> b -> ab) -> ab
const cpair = a => b => s => s (a) (b)

// first :: ((a -> b -> a) -> ab) -> ab
const first = p => p (T)
// second :: ((a -> b -> b) -> ab) -> ab
const second = p => p (F)

// c0 :: a -> b -> b
const c0 = s => z => z
// succ :: ((a -> b) -> c -> a) -> (a -> b) -> c -> b
const succ = n => f => x => f ( n (f) (x) )

// isnil :: ((a -> b -> a) -> ab) -> ab
const isnil = p => p (T)

// nil :: ((a -> b -> a) -> (a -> b -> a) -> ab) -> ab
const nil = cpair (T) (T)
// cons :: a -> b -> ((x -> y -> y) -> ((a -> b -> ab) -> ab) -> bs) -> bs
const cons = x => xs => cpair (F) (cpair (x) (xs))

// chead :: ((a -> b -> b) -> (x -> y -> x) -> ab) -> ab
const chead = z => first (second (z))
// ctail :: ((a -> b -> b) -> (x -> y -> y) -> ab) -> ab
const ctail = z => second (second (z))


// Should use only λ-expr like Church numerals not ints 
let s0 = cons (23) (cons (37) (cons (53) (nil)))
let h1 = chead (s0)
let h2 = chead (ctail (ctail (s0)))
