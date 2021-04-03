/**
 * The binary combinator Kestrel (True, First, Constant) always ignores the second argument and just returns the first. After being fed only one argument, it locks it in and returns it while ignoring the (second) param with which it is called. Kestrel is sometimes called the Constant function, although it is really a constant maker - it returns a true constant function when called with a single argument.
 *
 * K² := λa.λb.a
 *
 * K :: a -> b -> a
 */
const K = a => _ => a;

export default K;
