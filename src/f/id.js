/**
 * Identity function, id, the neutral element of function composition,
 * takes any type of input and just forwards it as the return.
 * 
 * id :: a -> a
 * 
 * @template T
 * @param {T} x
 */
const id = x => x

/*
Identity Function

Identity is the neutral element in the Semigroup algebraic structure that consists of a set of functions with composition as its binary operation, and upholds Closure, Associativity and Identity axioms.

Semigroup { ⨍, ∘, id }
* carrier set: set of functions, ⨍
* binary operation: composition of functions, ∘
* semigroup axioms: closure, associativity, identity

Semigroup axioms
* CLOSURE: composition is closed over a set of functions; composing two functions produces another function, i.e. another member of the same set
* ASSOCIATIVITY: (h ∘ g) ∘ f = h ∘ (g ∘ f) = h ∘ g ∘ f
* IDENTITY: id is the neutral element of composition, id ∘ f = f = f ∘ id


*/
