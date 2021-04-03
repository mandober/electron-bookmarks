// ----------------------------------------------------------------- definition
// Takes a list of predicates and a value, and checks if at least
// one predicate holds. The empty list of predicates means that no
// predicate holds, so it returns false.
// any :: [(a -> Bool)] -> a -> Bool
const any = ([p, ...ps]) => x =>
    p === undefined
        ? false
        : p(x)
            ? true
            : any(ps)(x)
;

// --------------------------------------------------------------------- export
export default any;
