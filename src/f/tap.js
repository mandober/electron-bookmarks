import curry from './curry.js';

// tap :: (a -> IO a) -> a -> a
const tap = curry((f, x) => (f(x), x));

export default tap;


tap(console.log)(42)
tap(console.log)({left: 308, right: 'three hundret and eight'})
