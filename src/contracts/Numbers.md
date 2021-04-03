# Number sets in JS

```
ℕ+ = { 1, 2, ...}           The counting numbers, ℕ+ ⋂ {0}
ℕ⁰ = { 0, 1, 2, ...} = ℕ    The natural numbers (explicitly denoted)

(≂ upper bound, ≃ lower bound, ≋ similar to)

∅
𝔹 ≡ Boolean
ℕ ≂ BigInt, (Number/int)
ℤ ≂ BigInt, (Number/int)
ℝ ≂ Number/floats
ℚ = p/q where ∀pq ∈ ℤ ∧ q != 0
ℂ
```


Numbers in JS are exposed as a single type, Number,
which is a 64-bit floating-point type, technically a binary64,
commonly known as 'Double' (as opposed to 'Float', which is binary32).
Double has 1 + 52 + 11 bits of space: sign + significant + exponent.

Recent addition is the BigInt datatype that repr the integers using all available memory. BigInt literals are suffixed with `n`, as in `42n`.
Interop between Number and BigInt is not possible without prior conversion.

JS Number type corresponds to a bounded set of the real numbers, ℝ.
It is the ℝ set because the type defines, at least as constants,
also a few irrational numbers, such as π, e, ϵ, etc.

Internally, a JS engine also uses proper machine-dependent integers, which are 64-bits wide on x86_64 or 32-bit wide with the previous X86 gen CPUs.
However, JS uses the 32-bit integers exclusively (for some reason). These are the ones denoted as 'int' in C (the 64-bit ints are 'long' in C).
When a JS engine needs to deal with certain numeric operations, particularly with bitwise operations, it forces a number into a 'int'. It uses 2 subtypes internally: int (i32) and uint (u32), both 32-bit wide.

This can be proved by forcing a JS engine to convert a number to an integer:
the canonical operation for this is OR-ing a number with 0: `n | 0`.

```js
2**31 - 1            //  2_147_483_647
2**31                //  2_147_483_648
2**32                //  4_294_967_296

2**31 - 1 | 0        //  2_147_483_647
2**31     | 0        // -2_147_483_648
```
This proves that i32 is used internally, ranging from -2^31 to 2^31-1
