'use strict';
/*
Lambda Calculus: Fixpoint Combinator

Lambda Expressions
  : x,y,z,...       (variables)
  | λx.M            (abstraction)
  | MN              (application)

  | [y/x]M          (α-equivalence)
  | MN              (β-reduction)
  | MN              (η-reduction)




Church-Rosser Theorem:
(e ~~>* e1 ∧ e ~~>* e2) -> ∃e': e1 ~~>* e' ∧ e2 ~~>* e'


Fixpoint combinator:
term N : N E ~~>* E(NE), for any lambda term E

(~~>* denotes β-reduction in one or more steps)



(Turing's Fixpoint)
Let A be λx:λy:y (x x y).
Then A A is a fixpoint combinator.
Let e by any lambda term.
A A e = (λx:λy:y (x x y)) A e e (A A e).

We usually write fix to means a fixpoint combinator,
and compuationally it behaves as fix e ∗ e (fix e).

Fixpoint combinator allows us to represent recursive definition
such as a = G a, (where G is a lambda term) by a lambda term a = fix G

*/
