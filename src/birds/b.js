/**
 * The ternary combinator Bluebird (compose) represents function composition.
 *
 * B³ := λa.λb.λc.a(bc)
 *
 * B :: (b -> c) -> (a -> b) -> a -> c
 */
const B = g => f => x => g(f(x));

export default B;
