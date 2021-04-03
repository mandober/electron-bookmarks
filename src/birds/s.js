/**
 * The Starling combinator takes 3 params: its first and second arguments are individually applied to the third, then the result of the former is applied to the latter.
 *
 * S³ := λa.λd.λc.ac(dc)
 *
 * S :: (a -> b1) -> (a -> b2) -> a -> b3
 */
const S = f => g => x => f(x)(g(x));

export default S;

/*

I¹ := λa.a
K² := λa.λb.a
F² := λa.λb.b
S³ := λa.λd.λc.ac(dc)


*/
