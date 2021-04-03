import curry from './curry.js';

// fork :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d
const fork = curry((join, f, g, x) => join(f(x), g(x)));

export default fork;
