/*
Nat

Contract for the natural numbers, Nat.

In JS, Nat could be repr in 2-3 ways since there are now 2 types of numbers
- Number but as real integer
- Number as Safe Integer
- BigInt


Number
Although Number is a float on the surface, internally JS uses 32-bit integers, aka i32 signed integer type. This means Nats backed up by a Number have the range from 0 to 2^32-1.

BigInt
The new integer type is bound only by the available memory. Suspectedly, it uses arrays to repr its digits, then interprets the repr as two's compliment.
Syntactically, BigInt literals use the suffix 'n', as in 42n.
BigInts that are very large are denoted as strings, "24529527592599524995n".

Interop between BigInt and Number is not possible without prior conversion.

We could use Haskell's scheme and call the bounded integers "Int"; these are the `Number`s forced to a i32. And "Integer" would be the type name for the unbounded integers backed up by the BigInt type.

Similarly, we could form Nat and Naturals, from Int and Integers.

*/
import die from './die.js'

const $Number = x => typeof x === 'number' ? x : die(x, 'Number')

// Int could be the bounded Number type forced to int
const $Int = n => n | 0;

// Integer could be the (theoretically unbounded) BigInt type
const $Integer = big => {
    big >= 0n ? big : die(x, 'Integer')
}

/*

0 Number::Int | 0
range: [-2^30-1, 2^30-1]
range: [0, 2^31-1]

1 Number::SafeInteger
range: [-∞, ∞]

2 BigInt
range: [-∞, ∞]

2**31   | 0                     -2_147_483_648
2**31-1 | 0                      2_147_483_647
Number.MAX_SAFE_INTEGER: 9_007_199_254_740_991
2^53 - 1                 9_007_199_254_740_991
2^53                     9_007_199_254_740_992
2^63                 9_223_372_036_854_775_808

float: 1+53+10


*/
class Num {
    value
    tag = 0 // 0=Number::Int, 1=Number::SafeInteger, 2=BigInt
    constructor(n) {
        this.value = n
    }
    get num() { this.value }
}
