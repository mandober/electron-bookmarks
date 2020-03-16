'use strict';
/*
Lambda Calculus: Basic Combinators

Whichever encoding scheme one selects,
the identity function is always:
    λx.x        ..... untyped Lambda Calculus
    I :: a -> a ..... typed (Haskell)

*/

// λx.x     (I, identity)   I :: a -> a
const I = x => x

// λxy.x    (T, true)       T :: a -> b -> a
// λxy.y    (F, false)      F :: a -> b -> c

// succ: λnxf.fn

// zero: λxy.y (≡ F)
const Z = x => _ => x

const S = n => f => x => f(nfx)
