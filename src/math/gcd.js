// ---------------------------------------------------------------------- about
/*
https://en.wikipedia.org/wiki/Greatest_common_divisor

Greatest Common Divisor (GCD)

of two ints a and b is the largest integer that divides both a and b.
gcd(4,36) = 4

The Euclidean Algorithm is an algorithm for finding the GCD of two ints:
If A = 0 then GCD(A,B)=B, since the GCD(0,B)=B, and we can stop.
If B = 0 then GCD(A,B)=A, since the GCD(A,0)=A, and we can stop.
Write A in quotient remainder form (A = BQ+R)
Find GCD(B,R) using the Euclidean Algorithm since GCD(A,B) = GCD(B,R)
*/


// --------------------------------------------------------------------- import
import curry from './f/curry.js'

// --------------------------------------------------------------------- define
const gcd = (a, b) => {
    a === 0
        ? b
        : b === 0
            a
            : gcd(b, r)

// --------------------------------------------------------------------- helper


// --------------------------------------------------------------------- export


// ------------------------------------------------------------------------ alt


// ---------------------------------------------------------------------- check
console.log('\n',
    '', '\n',
)
