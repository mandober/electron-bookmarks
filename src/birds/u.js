const ω = f => f(f)


const Y = f => (x => f(     x(x)   ))
               (x => f(     x(x)   ))

const Z = f => (x => f(y => x(x)(y)))
               (x => f(y => x(x)(y)))




const Z1 = f => (x => f(y => x(x)(y)))
                (x => f(y => x(x)(y)))
