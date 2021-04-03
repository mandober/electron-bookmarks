/*
class Eq a where
  (==) :: a -> a -> Bool
  (/=) :: a -> a -> Bool
MINIMAL (==) | (/=)


equivalence
===========
"equivalent" is an appropriate definition of equivalence for the given value.
The definition of equivalence should ensure that the two values can be safely swapped out in a program that respects abstractions.

For example:
- Two lists are equivalent if they are equivalent at all indices.
- Two plain old JavaScript objects, interpreted as dictionaries, are equivalent when they are equivalent for all keys.
- Two promises are equivalent when they yield equivalent values.
- Two functions are equivalent if they yield equivalent outputs for equivalent inputs.

*/
class Eq {
    // (==) :: a -> a -> Bool
    eq = a => b => a === b

    // (/=) :: a -> a -> Bool
    ne = a => b => a !== b
}
