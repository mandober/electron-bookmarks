// fix :: (a -> a) -> a
const fix = f =>
    (x => f(y => x(x)(y)))
    (x => f(y => x(x)(y)))
;


export default fix;


/*
Least Fixed Point LFP
=====================

https://en.wikipedia.org/wiki/Least_fixed_point

`fix f` is the least fixed point of the function `f`
i.e. the least defined `x` such that `f x = x`

Y = λf.λx.f(xx)(λx.f(xx))

Y := λf.(λx.f(xx))
        (λx.f(xx))

ω := λf.ff
Y := (ω) (λx.f( xx )) = λf. (λx.f(xx)) (λx.f(xx))


Z := fix :=
 λf.(λx.f(λy. x x y))
    (λx.f(λy. x x y))

ω := λf.ff
Z := (ω) (λx.f( λy. x x y ))

*/
const genTri = f => n => n < 2 ? 1 : f(n-1) + n
const genFac = f => n => n < 2 ? 1 : f(n-1) * n
const genFib = f => n => n < 2 ? 1 : f(n-1) + f(n-2)

const gen12 = f => n => n < 2n ? 2n : f(n-1n) * f(n-2n)
const gen11 = f => n => n < 2n ? 2n : f(n-1n) ** 2n // f(n-1n)
const gen13 = f => n => n < 3n ? 2n : f(n - 1n) * f(n - 3n)


console.log('\n',
    fix(genTri)(10)  , '\n',
    fix(genFib)(9)   , '\n',
    fix(genFac)(6)   , '\n',
    fix(gen12)(3n)   , '\n',
    fix(gen12)(4n)   , '\n',
    fix(gen12)(5n)   , '\n',
    fix(gen12)(6n)   , '\n',
    fix(gen11)(6n)   , '\n',
    fix(gen11)(7n)   , '\n',
    fix(gen13)(6n)   , '\n',
)
