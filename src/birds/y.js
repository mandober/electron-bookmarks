// Y := λf.(λx.f(xx))(λx.f(xx))
const Y = f => x => f(x(x))
               x => f(x(x))
;
export default Y;

/*
Z := λf.(λx.f(λv.xxv))(λx.f(λv.xxv))
const Z = f =>
    (x => f(y => x(x)(y)))
    (x => f(y => x(x)(y)))
;

This is the origial Y combinator but it will fail in strict languages,
shown here only for completness; in JS, use Z instead.
*/
