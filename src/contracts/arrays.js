/* array contracts

is_
- array<a>, [a]
- array<Number>, [Number]
- array<Number>, [Number; 3] ~~ [1,2,3]

- array<String>, [String]
- array<Bool>, [Bool]

- array<Fn>, [Fn]

- array<Fn>, [(a -> a)]         unary, magma
- array<Fn>, [(a -> b)]         unary, semigroup

- array<Fn>, [(a -> a -> a)]    binary, magma

- array<Fn>, [(a -> b -> b)]    binary, semigroup
- array<Fn>, [(a -> b -> a)]    binary, semigroup

- array<Fn>, [(a -> b -> c)]    binary


*/
