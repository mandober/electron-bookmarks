

const median = (...xs) => xs.sort()[Math.floor(xs.length / 2)]


const average = ([...xs]) => sum(xs) / xs.length



/*
The ECMAScript specification defines ToInteger(n) as:
    sign(n) × floor(abs(n))
*/
const into_int = x => x = Number(x) < 0
    ? Math.ceil(Number(x))
    : Math.floor(Number(x))
;

// Convert to a signed 32-bit int: removes fraction and applies modulo 2^32
const into_i32 = x => x | 0;

// Convert x to an unsigned 32-bit integer
const into_u32 = x => x >>> 0;


// % is not modulo, it returns a num with the same sign as its 1st operand
const rem = x => y => x % y;
// modulo has the same sign of the second operand

const div = x => y => into_i32(x / y);


const euc = x => y => {
    let f = x / y;

    [x, y]
}


/*

x  | y |   /  | rem |js %| mod | euc    |
---|---|------|-----|----|-----|--------|---------
 11| 4 | 2.75 |   3 |  3 | 3   | ( 2, 3)| 
-11| 4 |-2.75 |  -3 | -3 | 3   | (-2, 3)| 
 11|-4 |-2.75 |  -3 |  3 |-3   | ( 2,-3)| 
-11|-4 | 2.75 |   3 | -3 |-3   | (-2,-3)| 


Remainder (not modulo):
======================
Euclidean division of
  an integer n (nominator)
  by
  an integer m (multiplier)
produces
  an integer q (quotient)
  and
  a natural number r (remainder)
  such that 0 <= r <= q
('and' implies an ordered pair <q,r>, not addition q+r)

n ÷ m = (q, r)      (n,m,q ∈ ℤ) ∧ (r ∈ ℕ | 0 <= r <= q)
n = m * q + r

(note that rem is a positive number that is always added to m*q)

n   ÷  m = (q , r)
 11 ÷  4 = ( 2, 3) ~~>  11 =  4 * 2 + 3 =  11  ✔
 11 ÷ -4 = (-2, 3) ~~>  11 = -4 *-2 + 3 =  11  ✔
-11 ÷ -4 = ( 3, 1) ~~> -11 = -4 * 3 + 1 = -11  ✔
-11 ÷  4 = (-3, 1) ~~> -11 =  4 *-3 + 1 = -11  ✔

-11 ÷  4 = (-2,-3) ~~> -11 =  4 *-2 + -3 = -11 ✘ ∵ r < 0
-11 ÷  4 = (-4, 5) ~~> -11 =  4 *-4 + 5  = -11 ✘ ∵ r > q

*/




console.log(
    into_int(2**33)    , '\n',    // 8,589,934,592
    into_int('a')    , '\n',      // NaN
    into_int('NaN')    , '\n',    // NaN

    into_i32(2**32 - 1), '\n',    // -1
    into_i32(2**31 - 1), '\n',    //  2,147,483,647
    into_i32(2**31)    , '\n',    // -2,147,483,648
    into_i32(3.141)    , '\n',    // 3
    into_i32(-4.141)    , '\n',   // -4
    into_i32(2**33)    , '\n',    // 0
    into_i32('42')    , '\n',     // 42
    into_i32('a')    , '\n',      // 0
    into_i32('NaN')    , '\n',    // 0

    into_u32(2**32), '\n',        // 0
    into_u32(2**32 - 1), '\n',    // 4,294,967,295

)
