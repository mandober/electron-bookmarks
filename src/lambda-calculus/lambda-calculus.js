/*
Lambda Calculus

Lambda Expressions
    : x,y,z,...       (variables)
    | λx.M            (abstraction)
    | MN              (application)


α-equivalence:
    λx.x ≡ λz.z | x->z

β-reduction:
    [y/x]M

η-expansion:
    (λx(λa.a)x)
η-reduction:
    (λa.a)


right-assoc λ-abstraction, left-assoc application
  λa.[λb.{λc.[λd.({ab}c)d]}]
  λa.(...         (ab)c)... )


*/


// id
const id = a => a

// η-conversion (to thunk)
const eta = a => (() => a)
