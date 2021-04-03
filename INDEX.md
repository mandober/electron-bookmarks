# Index of functions

* Functionals
  - id
  - constant
  - curry
  - compose
  - pipe
  - flip
  - cap
  - memoize
  - trampoline
  - fix
* Arith
  - succ (hyper0)
  - pred
  - odd
  - even
  - add (hyper1)
  - sub
  - mul (hyper2)
  - div
  - intdiv
  - euc_div
  - exp (hyper3)
  - hyper_ops (tetration ,pentation, hextation, ...)
  - log (log10), lg (log2), ln (loge)
  - mod
  - rem
  - sign
  - abs
  - isPrime
  - average
  - mode
  - median
  - gcd
  - lcm
* Infinite series
  - sequences (start, stop, step)
  - naturals
  - triangular
  - factorial
  - fibonacci
  - squares
  - power series
* List (strings, iterables)
  - cons, (:)
  - append, (++)
  - snoc
  - head
  - tail
  - init
  - last
  - concat
  - flat
  - flatMap
  - fold, foldl, foldr, foldl1, foldr1
  - unfoldl, range, unfoldr
  - scanl, scanr, scanl1, scanr1
  - ap, chain, bind, then
  - mempty, unit, pure, return
  - sconcat <>
  - mappend
  - mconcat
  - map, fmap, <$>
  - merge, ++
  - filter
  - reverse
  - iterate
  - take
  - takeWhile
  - drop
  - dropWhile
  - sort
  - replicate
  - zipMap
  - zipWith
  - zip
  - zip3
  - intersperse
  - intercalate
* Strings
  - stringify
  - toTitleCase
  - words
  - unwords
  - line
  - unline
* Boolean algebra
  - every, all (∧, ∀)
  - some , any (∨, ∃)
* Monoids
  - product
  - sum
* Utilities
  - log
  - throttle
  - defer
* Contracts
  - die
  - $Boolean
  - $Number
  - $BigNum
  - $String
  - $Symbol
  - $Undefined
  - $Null
  - $Object
  - $Array
  - $Function
* Sectioning


```js
const sectioning = a => b => f => f(a, b)
const sectioning = a => b => ⨀ => a ⨀ b
const sectioning = a => b => q => a `q` b

(⨀) (a⨀b) (a⨀) (⨀b)

( ⨀ ) = a => b => a ⨀ b
(a⨀ ) = a => b => a ⨀ b
( ⨀b) = a => b => a ⨀ b
(a⨀b) = a ⨀ b

add, (+)    : `(x+)`  == `(+x)`
mul, (*)    : `(x*)`  == `(*x)`
sub, (-)    : `(x-)`  != `(-x)`
div, (/)    : `(x/)`  != `(/x)`
exp, (**)   : `(x**)` != `(**x)`
idiv, (//)  : `(x//)` != `(//x)`
rem, (%)    : `(x%)`  != `(%x)`
mod, (%)    : `(x%)`  != `(%x)`

lt,  (<)
le,  (<=)
gt,  (>)
ge,  (>=)

cons, (:), (:xs)

apply, `($)` : `($x)` != `(x$)`
```
