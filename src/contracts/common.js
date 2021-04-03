import die from './die.js'
// ----------------------------------------------------------------------------



/*
// ----------------------------------------------------------------------------
Need a better way to specify contracts
for all params and return value

* Boring way is to apply them to a param on its first use.
  With curry already applied all over the place, this will end tragically.
* Better to have a contracts-array that specifies the contracts for each param and the retun value. Located in front of the function, i.e. applied to it.
* Decorators! but... but can't decorate the params, can you? return value? No, man - decorate the whole function! With a contracts decorator and a way to assign them appropriately to the affected parties.



eg.

const
  sum =
    xs =>
      foldr (add) (0) (xs);


make sure xs is
- an array
- of numbers

const sum =
    (
      [ [$Number], $Number ]
    )
    (
        xs => foldr (add) (0) ($Array(xs))
    )


// ----------------------------------------------------------------------------
*/
