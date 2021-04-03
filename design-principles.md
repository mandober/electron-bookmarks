# Design principles

Issues
- Cuple vs Turry
- The position of data argument: data-first, always
- Point-free
- Organizing functions: one per file
- Static vs Dynamic: static i.e. no this
- Builtins vs Custom: custom predominantly, avoid builtins like the plague
- Reuse native methods: never
- Contracts: fail hard with a clear message (if you tolerate this then...)
- Impose static type system onto the fucker
- Monolithic vs prolific package: the latter
- Minimal modules: each does one thing only, oh, well
- Logically grouped: will do
- Modules in a hierarchy of categories: anarchy of catfood, son
- variadic functions: never



## Cuple vs Turry

Function declaration: how to handle params?
- always use curry
- use tuples then curry-decorate all call-sites (business amounts)
- each fn handles currying itself

Unresolvables
- awaiting the verdict, *tuple or curry*
- *curry-decorate* everything right from the start, do it all the time, but
- define functions using the traditional *tuple form*
- after all, it's easier to go from tuple to curry
- tuple, i.e. all-params-at-once drawbacks, e.g. using the rest operator?
