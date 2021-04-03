// ----------------------------------------------------------------------------
// arg capping
//
// cap1 takes a polyadic fn and makes it ignore all but the 1st arg
// Needed only if you compose custom fns (all of fixed arity) with variadic fns.
// eg. passing a bipolar "unary,at most binary" function with optional 2nd arg,
// like parseInt, to a unary fn, like map (which then slurps an unsuspecting 
// value because it was allowed to, if one finds itself in lethal vicinity).
// ----------------------------------------------------------------------------

/// capN :: ((a1,...,aN) -> b) -> a1 -> b
const cap = f =>
    f.length < 2 ? f : (
        n => (...xs) => xs.length === n
            ? f(x)
            : console.error('[cap] Incorrect number of args!')
    )
;

// ----------------------------------------------------------------------------
/// cap1 :: ((a1,...,aN) -> b) -> a1 -> b
cap.unary = f => x => f(x)

/// cap2 :: ((a1,...,aN) -> b) -> a1 -> b
cap.binary = f => (x, y) => f(x, y)

//---------------------------------------------------------------------- export
export default cap;
