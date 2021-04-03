// --------------------------------------------------------------------- import
import foldl from './foldl.js'

// ----------------------------------------------------------------- definition

const min = ([x, ...xs]) => foldl ((a,b) => a < b ? a : b) (0)

// x === undefined ? [] : mini(x, xs)

// a.reduce ((a,b) => a < b ? a : b )

const sort = ([x, ...xs]) =>
    x === undefined
        ? []
        : min (x) (sort(xs))

// --------------------------------------------------------------------- export
