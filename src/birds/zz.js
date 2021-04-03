// ZZ := λf.(λx.f(λv.xxv))(λx.f(λv.xxv))
function ZZ(f) {
    return (
        function(x) {
            return f(function(y) {
                return x(x)(y)
            })
        }
    )(function(x) {
            return f(function(y) {
                return x(x)(y)
            })
        }
    )
}

const facgen = f => n => n == 0 ? 1 : n * f(n-1)

console.log(ZZ(facgen)(5))
