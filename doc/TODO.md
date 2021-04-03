

* algorith desc
formal and informal desc of the alrorithm implemented.

* test:
find better test tooling; check **quickcheck**

* test:
test all allowed input, exp. since list functions generally work with **iterables** (map, set, array, string) so test 'em all, esp. strings

* strings: 
most list functions work with arrays, that is iterables, which are arrays, maps, sets, strings... but strings are not returned properly, e.g. as one word, but as an array of chars. So, if a string is received there has to be some final kick to join it back up.

input     : 'cobra'
f         : `init(input)`
output    : [ 'c', 'o', 'b', 'r' ]
should be : 'cobr'

* invariants
specify a list of invariants and/or laws that are upheld by a function

* standalone
*use node* to produce a standalone version of the specified function. it should find what's needed (imported) ans stich it all in one file appropriately.

* groups
*use node* to arbitrarily group functions, i.e. node should automate creation of reexport files that import a bunch of functions but export one object.

* script template
*use node* to automate creation of new files, such that they already have the appropriate markers and shit.
