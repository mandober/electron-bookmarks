# Testing

* manual testing is futile
* see what that quickcheck is about

Coming up with the testing patterns for a type like number or string in JS is an impossible task to do satisfactory (this jsut in: "there's a repo for that!". I forgot the name but it's out there) It has a bunch of crazy string patterns, valid and invalid unicode, mixed encoding, something something pairs (trailing?), and shit. It should cover string related testing.

*numbers* dimensions
- type: float, int, bigint
- obj-type: unboxed vs boxed
- range: max int, max safe int, min safe int, ...
- precision
- radix: binary, octal, decimal, hex
- constants: π, ϵ, ρ, σ, τ, ζ
- numeric strings, (bool)
- the concept of *falsey numbers*: -0, +0, NaN (yes? no!, what)
- NaN, Number.isNaN
- Infinity, -Infinity, +Infinity
- 0, -0, +0

*empty values*
- empty but not necessarily falsey values
- should probably include [], {}, ([]), "", '', /:?empty_re/

fuck! the only reason for this is i came upon array compacting problem. not that i expect having sparse array, but well, i just gotta add compact into my collection, y'know. and then the hell broke luce. creating sparse array then adding a few elements, then trying to compact it, yields soooo many different and unexpected results. pretty much the most reliable way seem to be using despised `filter` builtin method with a, less despised coz never used, `Boolean` function (constructor), as in:

```js
sa = [...Array(2), 0, +0, -0, NaN, ...Array(3), Infinity]
sa.filter(Boolean)

// hmm, now (x => x) and (x => !!x) works again...
sa.filter(x => x)
```
