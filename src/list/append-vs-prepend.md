# Append vs prepend

Concern: these functions are based on Haskell's list data structure which is a singly-linked list, but JS arrays are backed up by proper C-like arrays in the best case (compact, homogeneous, primitive-typed, especially if fix-sized). As they deteriorate, the backing data structure is switched with a vector, then with a struct (?), and finally a hash-table. Anyway, the point is that the cheapest way to insert a new element in a list is prepending, but in an array it is appending.

* list: append cheap, prepend expensive
* array: append expensive, prepend cheap

So, a Haskell's function like cons, that *prepends* an element to list, should not be just simply transplanted into JS with arrays in place of lists.

Prepending is very expensive with arrays as they have to be relocated in order to make room for the new element; and that happens every single time an element is added to the front of an array. A recursive function that manipulates an array with prepends (as is usually the case), the cost is probably tremendous. And every single function translated from Haskell does it exactly like this, in the most costly way possible!

On the other hand array destructuring in JS encourages the head-and-tail pattern with `[x, ...xs]`. Fact is, this patter is the reason why Haskell's functions are so easy to translate into JS, since Haskell patten matching expression is virtually the same: `(x : xs)` as JS's.

The implementations of `map` function in Haskell and JS can be remarkably similar:

```hs
map f []     = []                   -- base case
map f (x:xs) = f(x) : map f xs      -- rec case
```

```js
const map = f => ([x, ...xs]) =>
    x === undefined ? []            // base case
    : [f(x), ...map(f)(xs)]         // rec case
```
