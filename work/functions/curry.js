
// curry :: ((a, b, ...) -> z) -> (a -> b -> ... -> z)
const curry = (f, ...xs) =>
    f.length <= xs.length
        ? f(...xs)
        : (...ys) =>
            f.length <= [...xs, ...ys].length
                ? f(...xs, ...ys)
                : curry(f, ...xs, ...ys)


export default curry


const a4 = (a, b, c, d) => a + b + c + d

function curry(fn, zs = [])
    (...ys) =>
        (xs =>
            xs.length >= fn.length
                ? fn(...xs)
                : curry(fn, xs)
        )(
            [...zs, ...ys,]
        )
