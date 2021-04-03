import B from './b.js'
import C from './c.js'
import I from './i.js'
import K from './k.js'
import F from './ki.js'
import S from './s.js'

/*
const T = K;

K.inspect = () => 'Kestrel'

T.inspect = 'T'
F.inspect = 'F'

T(T)(T)



Y := λf.(λx.f(   xx ))(λx.f(   xx ))

Z := λf.(λx.f(λv.xxv))(λx.f(λv.xxv))

The difference is in a thunk inserted in Z to delay evaluation:

if you have expr. xx you can delay its eval by inserting a fresh binding then immediately call it:

If we wrap an expression `xx` with a thunk, we get `() => xx` which is not the same as the expression itself becasue now it waits to be called (with any arg) to return the initial expression.

E               ...we want to delay this evaluation
_ => E          ...so we wrap it in a thunk, but that's not the same
(_ => E)        ...cuz now we need to call the thunk to get back our expr
(() => (E))()   ...so we wrap it in a IIFE ✔
(v => E)()      ... E ✔


(xx) ~~> λv.(xx)v
f(xx) ~~> f(λv.xxv)
x ~~> (λv.x)v
x ~~> (v => x)(v) // v is not def so error, so use just () instead
x ~~> (v => x)()  // ok

e
≡ (v => e)()
≡ (z => (v => e)())()
≡ (z => (v => e)(z))()  ...now we can use 'z' (init to undef for empty call)
≡ (w => (z => (v => e) (z) ) () ) ()


4 == (v => 4)() == (z => (v => 4)())()


let e = function() { throw new Error('oooops!') };
let z = 0;
() => 5;


(w => (z => (v => 5) (z) ) () ) ()
*/
