# Checklist

meta:
- name:
- aliases:
- dependencies:

attributes:
- arity     : 2
- static    : +
- pure      : +
- memoized  : -
- hardcore  : +++
- family    : functionals
- siblings  : -
- relatives : map
- invertable: no
- flippable : no


checklist:

[✔] params as n-tuple (not curried; curry comes later)
[✔] curry-decorated
[✔] curry all inner (e.g. reducer f in foldr)
[✔] exported
[✔] signature

[✘] tests
[✘] contracts

[✘] jsdoc
[✘] family (assign to family)
[✘] docs
[✘] informal description
[✘] theorems and axioms
