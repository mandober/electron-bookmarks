//--------------------------------------------------------------------- imports
import curry from './curry.js'
//import foldl from '../list/foldl.js'

//------------------------------------------------------------------ definition
// @param (a -> b)  f Function (unary)
// @param  a        x Any (but same as f's input)
// @return b          Any (but same as f's output)
//
// apply :: (a -> b) -> a -> b
const apply = curry((f, x) => f(x));

//---------------------------------------------------------------------- export
export default apply;


//------------------------------------------------------------------- checklist
/*

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


*/
