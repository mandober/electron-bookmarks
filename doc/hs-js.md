# HS vs JS

The most natural position and least expensive way to add a new element in a list is prepending to the front, but for arrays, it's appending on the back.


hs          | js
------------|-------
list        | array
(:)         | cons
(++)        | append
(!!)        | [index]
x:xs        | [x, ...xs]
head        | [x, ..._]
tail        | [_, xs_]
