/*
Module that re-exports all functionals (functions that operate on functions), and decorators.

import f as f from './lib/f.js'


*/

/*
Data.Function - functions that operate on functions.

This file re-exports functions from 'src/f/*.js'

id    :: a -> a
const :: a -> b -> a
flip  :: (a -> b -> c) -> b -> a -> c
($)   :: (a -> b) -> a -> b
(&)   :: a -> (a -> b) -> b
(.)   :: (b -> c) -> (a -> b) -> a -> c
fix   :: (a -> a) -> a
on    :: (b -> b -> c) -> (a -> b) -> a -> a -> c

*/

// flip :: (a -> b -> c) -> b -> a -> c
import flip from '../src/flip.js';

// (.) :: (b -> c) -> (a -> b) -> a -> c
import compose from '../src/compose.js';


// id :: a -> a
const id = a => a

// const :: a -> b -> a
const konst = a => _ => a

// ($) :: (a -> b) -> a -> b
const apply = f => x => f(x)

// (&) :: a -> (a -> b) -> b
// const ylppa = x => f => f(x)



// export {id, konst, flip, compose, apply, ylppa }
