
const hyperop0 = n => n + 1

const hyperop1 = (m, n, h=1) => n === 0 ? m : hyperop1(m, n-1)

const hyperop2 = (m, n, h=2) =>
    n === 0
        ? 0
        : n === 1
            ? m
            : hyperop1(m, hyperop2(m, n-1))




const hyperop = (h, m, n) =>
    h === 1 // id 0 else 1
        ? h(m, 0) = m
        : h(m, 1) = m
        //h(m, n) = h-1(m, n-1)


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




hyper-ops, φ
- hyper-0: succ
- hyper-1: addition
- hyper-2: multiplication
- hyper-3: exponentiation
hyperoperations:
- hyper-4: tetration
- hyper-5: pentation
- hyper-6: hexation
- hyper-n
η⁰
η¹

φ⁰
φ¹
φ²
φ³
φ⁴
φ⁵
φ⁶
φ⁷
φ⁸
φ⁹
φⁿ’
φⁿ‵
φⁿ¯¹

φ₀₁₂₃₄₅₆₇₈₉
φ₀
φ₁
φ₂
φ₃
φ₄
φ₅
φ₆
φn


φⁿ’(m, n’) = φⁿ’(m, φⁿ(m, n))
n = 0
φ⁰
φ¹(m, φ⁰(n)) = φ⁰(φ¹(m,n))
φ²(m, n') = φ²(φ¹(m,n))

mul = hyper-2
m × n' = n + m × n



φⁿ’(m, n’) = φⁿ’(m, φⁿ(m, n))





m ↑ p−1(n+1)



φ(m,n,p) = m ↑ p−1(n+1)



and for p > 2 it extends into hyperoperations:
    p=3: hyper-4: tetration       φ(m,n,3)=m \uparrow ^{2}(n+1)
    p=4: hyper-5: pentation
    p=5: hyper-6: hexation

   etc.: φ(m,n,p) ⪆ m ↑ p−1(n+1)
       $$φ(m,n,p) \gtrapprox m \uparrow ^{p-1}(n+1) (p \geq 4)$$


*/
