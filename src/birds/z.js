// Z := λf.(λx.f(λv.xxv))(λx.f(λv.xxv))

const Z = f =>
    (x => f(y => x(x)(y)))
    (x => f(y => x(x)(y)))
;

export default Z;

const facgen = f => n => n < 2 ? 1 : f(n-1) * n;
const fibgen = f => n => 
    n < 1 
        ? 0 
        : n < 2 
            ? 1 
            : f(n-1) + f(n-2);


console.log(
    Z(facgen)(5),
    Z(fibgen)(0),
    Z(fibgen)(1),
    Z(fibgen)(2),
    Z(fibgen)(3),
    Z(fibgen)(4),
    Z(fibgen)(5),
    Z(fibgen)(6),
    Z(fibgen)(7),
    Z(fibgen)(8),
)
