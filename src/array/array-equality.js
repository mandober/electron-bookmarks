/*
Array equality
==============
Although JS arrays can hold values of different types, by convention:
- arrays are homogenous lists : [1,2,3,4,5,6,7] :: Number[]
- tuples are heterogenous lists : [true, 'abc'] :: Tuple(Bool,String)

Therefore [1, '2', 3] is a tuple, Tuple(Number,String,Number)

The question whether an array and a tuple can be compared remains unresolved:
    compare ([1, 2, 3]) ([1, '2', 3])

How about an array and an array-like object:
    compare ([1, 2]) ({0:1, 1:2, length: 2})
knowing that:
    Array.from({0:1, 1:2, length: 2}) ~~> [ 1, 2 ]



Array structural equality
=========================
JS arrays are objects, and like all JS objects they are not compared structurally but only referentially - i.e. since objects are reference values, two variables (references) must point to the very same array for that comparision to return true. This is despite the fact that two arrays may be completely indentical in all structural aspects.


Checking if two arrays are equal depends on several factors
- type
- cardinality
- strict or loose comparison (loose type compatibility)
- elements: the same value on the corresponding, same, index
- indices
- values
- element order
- element dups

Strict equality is easy - if two arrays are not identical in every STRUCTURAL ASPECT, then they are NE.

xs          ys              equality        notes
[1,2,3]     [1,2,3,4]       false           subset, proper subset
[1,2,3]     ['1','2','3']   ne (strict)     eq (loosely)

[1,2,3]     [1,2,2,3,3]     dups
[1,2,3]     [2,3,1]         ord
[1,2,3]     [2,3,2,3,1]     dups+ord
[1,2,3]     ['2','3','1']   type+ord


*/
const struct_eq = ([x,...xs]) => ([y,...ys]) =>
    xs.length !== ys.length
        ? false
        : x === undefined
            ? false
            : y === undefined
                ? false
                : Array.isArray(x)
                    ? struct_eq(x, y)
                    : x === y
;

console.log('\n',
    struct_eq ([1,2,3]) ([1,2,3]), '\n',
    struct_eq ([1,2]) ([1,2,3]), '\n',
    struct_eq ([1,2,3]) ([3,2]), '\n',
    struct_eq ([1,2,3]) ([1,2]), '\n',
)
