/*
https://github.com/fantasyland/fantasy-land#setoid

Setoid
======
1. Reflexivity  : a == a
2. Symmetry     : a == b -> b == a
3. Transitivity : a == b ∧ b == c -> a == c

* ['fantasy-land/equals']
* a['fantasy-land/equals'](b)


1. Reflexivity

    a == a

    a.equals(a) === true

    a['fantasy-land/equals'](a) === true

2. Symmetry

    a == b = b == a

    a.equals(b) === b.equals(a)

    a['fantasy-land/equals'](b) === b['fantasy-land/equals'](a)

3. Transitivity

    a == b ∧ b == c -> a == c

    a.equals(b) ∧ b.equals(c) -> a.equals(c)

    If a['fantasy-land/equals'](b) and b['fantasy-land/equals'](c), 
    then a['fantasy-land/equals'](c)

*/
