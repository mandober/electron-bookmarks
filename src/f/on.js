// ψ combinator
// on :: (b -> b -> c) -> (a -> b) -> a -> a -> c

/*

(*) `on` f = \x y -> f x * f y

Typical usage: `sortBy` (`compare` `on` `fst`)


Algebraic properties:

          (*) `on` id ≡ (*) (if (*) ∉ {⊥, const ⊥})

  ((*) `on` f) `on` g ≡ (*) `on` (f . g)

flip on f . flip on g ≡ flip on (g . f)


*/
