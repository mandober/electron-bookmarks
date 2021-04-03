import curry from '../curry.js'

const add = curry((a, b) => a + b);

export default add;


/*
add(m,      0 ) = m
add(m, succ(n)) = succ(add(m, n)

mul(m,      0 ) = 0
mul(m,      1 ) = m
mul(m, succ(n)) = add(m, mul(m, n))

exp(m,      0 ) = 1
exp(m,      1 ) = m
exp(m, succ(n)) = mul(m, exp(m, n))
m ↑ n = m ^ (m ↑ n)

tetration(m,      0 ) = 1
tetration(m,      1 ) = m
tetration(m, succ(n)) = exp(m, tetration(m, n))
m ↑↑ n = m ↑ (m ↑↑ n)

pentation(m,      0 ) = 1
pentation(m,      1 ) = m
pentation(m, succ(n)) = tetration(m, pentation(m, n))
m ↑↑↑ n = m ↑↑ (m ↑↑↑ n)

hexation(m,      0 ) = 1
hexation(m,      1 ) = m
hexation(m, succ(n)) = pentation(m, hexation(m, n))
m ↑↑↑↑ n = m ↑↑↑ (m ↑↑↑↑ n)

h7(m,      0 ) = 1
h7(m,      1 ) = m
h7(m, succ(n)) = h6(m, h7(m, n))
m ↑↑↑↑↑ n = m ↑↑↑↑ (m ↑↑↑↑↑ n)

h_n'(m,      0 ) = 1
h_n'(m,      1 ) = m
h_n'(m, succ(n)) = h_n(m, h_n'(m, n))

m ↑k' n = m ↑k (m ↑k' n)




function add2(x, y) {
    return arguments.length === 2
        ? x + y
        : (function (z) {
            return arguments.length === 1
                ? x + z
                : add2(x)
        })
}

console.log(
    '\n',
    add(5)(2), '\n',
    add(5)()()(3,3), '\n',
    add(5,10), '\n',
    add(2,4,10), '\n',
)
*/
