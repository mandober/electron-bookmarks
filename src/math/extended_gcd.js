// ---------------------------------------------------------------------- about
/*
function extended_gcd(a, b)
    s := 0;    old_s := 1
    t := 1;    old_t := 0
    r := b;    old_r := a
    while r ≠ 0 do
        quotient := old_r div r
        (old_r, r) := (r, old_r − quotient × r)
        (old_s, s) := (s, old_s − quotient × s)
        (old_t, t) := (t, old_t − quotient × t)
    output "Bézout coefficients:", (old_s, old_t)
    output "greatest common divisor:", old_r
    output "quotients by the gcd:", (t, s)
*/

// --------------------------------------------------------------------- import
import curry from '../f/curry.js'

// --------------------------------------------------------------------- define
const extended_gcd = curry((a, b) => {
    let     s = 0,     t = 1,     r = b
    let old_s = 1, old_t = 0, old_r = a
    let quotient
    while (r !== 0) {
        quotient = Math.floor(old_r / r);
        [old_r, r] = [r, old_r - quotient * r];
        [old_s, s] = [s, old_s - quotient * s];
        [old_t, t] = [t, old_t - quotient * t];
    }
    console.log(`Bézout coefficients: ${old_s}, ${old_t}`)
    console.log(`GCD: ${old_r}`)
    console.log(`quotients by the gcd: ${t}, ${s}`)
});

// --------------------------------------------------------------------- helper

// --------------------------------------------------------------------- export
export default extended_gcd


// ------------------------------------------------------------------------ alt


// ---------------------------------------------------------------------- check
console.log('\n',
    extended_gcd(54,24), '\n',
    Math.floor(9/-4), '\n',
    Math.ceil(9/-4), '\n',
)
