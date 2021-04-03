/**
 * The binary combinator Kite (KI, F, False, Z, Zero) may be derived by applying the Kestrel to Identity. Kestrel locks in its first param (here Identity) and returns it while ignoring the (second) param when called. Therefore, after Kite receives the first argument (which it discards), it becomes the Identity, KI(_) = I.
 *
 * KI² := λa.λb.b ≡ K I
 *
 * KI :: a -> b -> b
 */
const F = _ => b => b;

export default F;

/*

I  :=  λx.x
K  :=  λa.λb.a
KI := λx.λy.y
K I ~~> (λa.λb.a)(λx.x) ~~> λb.(λx.x) ~~> λb.λx.x ≡α≡ λx.λy.y

*/
