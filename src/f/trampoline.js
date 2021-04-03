// rec1
const fac = n =>
    n === 0n
        ? 1n
        : n * fac(n-1n)
;

const tramp = k => {
    while (typeof k === 'function') {
        k = k();
    }
    return k;
}

const bounce = f => f()

const f = n =>
    tramp(n === 0n
        ? 1n
        : () => n * f(n-1n)
);

console.log(
    f(50n)
)
