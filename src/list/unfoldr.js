

// unfoldr :: (b -> Maybe (a, b)) -> b -> [a]



/*
unfoldr takes a function, f :: b -> Maybe (a, b)
and the seed value,       s :: b
it returns a generated list :: [a]

[ b, f(b), f(f(b)), ... ]

apply `f` to the seed value `s :: b`, `f(s)`, producing `Maybe (a, b)`
- if the result is Nothing, the process stops and the list is returned.
- otherwise, we have `Just(s',s) :: Maybe (a,b)` where:
  - s :: b is the old seed value -- place it in the list
  - s':: a is the new seed value (not sure how can it be a diff type?!)
rinse and repeat

*/
