// memoize :: f -> f
const memoize = f => memo(f)

const memo = (f, cache) => (
    cache = {},
    x => cache[JSON.stringify(x)]
    || ( cache[JSON.stringify(x)] = f(x) )
)

export default memoize
