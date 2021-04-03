/**
 * Given an array of functions and an array of values, apply each function
 * to its corresponding (by index) value, returning the array of results.
 *
 * zipWith :: [(a -> b)] -> [a] -> [b]
 *
 */
const zipMap = ([f, ...fs]) => ([x, ...xs]) => 
    f === undefined
        ? []
        : [f(x), ...zipMap(fs)(xs)]

export default zipMap








/*
While map applies one and the same function to each element in a list,
zipMap applies each function form the list to the corresponding value in
the list of values, returning the array of results.


f(X) = f ( [ x⁰, x¹, x², …, xⁿ ] ) = [ f(x⁰), f(x¹), f(x²), …, f(xⁿ) ]

   .--------- f --------.
   |       /    \       |
   ↓      ↓      ↓      ↓
[  x⁰     x¹     x²     x³   ]
   ↓      ↓      ↓      ↓
[ f(x⁰)  f(x¹)  f(x²)  f(x³) ]



F(X) = [f⁰,f¹,f²,…,fⁿ] ([x⁰,x¹,x²,…,xⁿ]) = [f⁰(x⁰),f¹(x¹),f²(x²),…,fⁿ(xⁿ)]

[ f⁰   f¹   f²   f³ ]
  ↓    ↓    ↓    ↓
[ x⁰   x¹   x²   x³ ]
  ↓    ↓    ↓    ↓
[ y⁰   y¹   y²   y³ ]






⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁿ
f … x ⋯ y
₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉

*/
