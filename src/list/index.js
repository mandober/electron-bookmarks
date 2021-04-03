// --------------------------------------------------------------------- import
import curry from '../f/curry.js'

// ----------------------------------------------------------------- definition
// index, (!!)

// (!!) :: a -> [a] -> Int
const index = curry((y, [x,...xs]) =>
    x === undefined
        ? undefined
        : undefined
);

// --------------------------------------------------------------------- export
export default index;
