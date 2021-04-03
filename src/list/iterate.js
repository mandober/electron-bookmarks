/*
Apply function f to the arg x, repeatedly from 0 to n times, adding the results to an array. Produces an infinite list if n = Infinity.
*/

// iterate :: (a -> a) -> a -> [a]
const iterate = n => f => acc =>
    n < 1
        ? []
        : [ acc, ...iterate (n-1) (f) (f(acc)) ]
;

export default iterate;
