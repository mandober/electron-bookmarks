// curry :: ((a, b, ...) -> z) -> (a -> b -> ... -> z)
const curry = (f, ...acc) =>
    f.length <= acc.length
        ? f(...acc)
        : (...args) =>
            f.length <= [...acc, ...args].length
                ? f(...acc, ...args)
                : curry(f, ...acc, ...args)

export default curry
