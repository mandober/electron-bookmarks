import B from '../src/birds/b.js'
import C from '../src/birds/c.js'
import I from '../src/birds/i.js'
import K from '../src/birds/k.js'
import F from '../src/birds/ki.js'
import S from '../src/birds/s.js'



/*

Z := λf.(λx.f(λv.xxv))(λx.f(λv.xxv))



console.log(
    K(I)(3)(3), '\n',
    S(K)(F)(I)(4), '\n',

)


----------------------
I¹ := λa.a

K² := λa.λb.a
F² := λa.λb.b

B³ := λa.λb.λc.a(bc)
S³ := λa.λd.λc.ac(dc)
C³ := λf.λa.λb.fba

----------------------
F * = I     (λa.λb.b)(_) = λb.b ≡ I
K I = F     K I ~~> (λa.λb.a)(λx.x) ~~> λb.(λx.x) ~~> λb.λx.x ≡α≡ λx.λy.y
----------------------


S K F I =
K I (F I) =
F (const_I) = 
I


ⁿ ⁰ ¹ ² ³ ⁴ ⁵ ⁶⁷⁸⁹ ₀ ₁ ₂ ₃ ₄ ₅ ₆₇₈₉
*/
