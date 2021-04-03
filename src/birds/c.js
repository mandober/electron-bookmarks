/**
 * The ternary combinator Cardinal (aka flip) takes a binary function and its two arguments in aone by one manner (i.e. in the curryied form), and returns the result of applying the function to its two arguments but in reverse (otherwise this combinator would be called binary Apply).
 *
 * C := λf.λa.λb.fba
 *
 * C :: (a -> b -> c) -> (b -> a -> c)
 */
const C = f => a => b => f(b, a);

export default C;
