/*
Lambda Calculus: Mogensen–Scott encoding

Mogensen–Scott encoding
https://en.wikipedia.org/wiki/Mogensen%E2%80%93Scott_encoding

Scott numerals in untyped Lambda Calculus:
- zero: λxy.x          (true)
- succ: λnxf.fn
- pred: λn.n(0)(λx.x)
- case: λnaf.naf       (Pattern matching caseN)


(case)(n)(a)(f) returns:
    a      if n = 0
    f(x)   if n = succ(x)

With pattern matching, we can define predecessor function for natural numbers:
    pred := λn.caseN n Z (λn'.n')




      Scott             Church
zero: λxy.x             λxy.y
succ: λnxf.fn           λnfx.f(nfx)
case: λnaf.naf
pred: λn.n(0)(λx.x)

0   : λzs.z             λsz.z
1   : λzs.s(0)          λsz.sz ≡ S 0 ≡ (λnfx.f(nfx)) (λab.b)
2   : λzs.s(1)
3   : λzs.s(2)





            (S)             (0)
( λnfx. f [    n    f x ] ) (0)          [0/n]f(nfx)
λfx.    f [    0    f x ]
λfx.    f [ (λab.b) f x ]                [f/a]b
λfx.    f [ (λb.b) x ]                   [x/b]b
λfx.    f [ (x) ]
λfx.    f    x
λfx.fx ≡ λsz.sz ≡ 1

*/
