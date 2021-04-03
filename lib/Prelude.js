/*
Prelude - main all-encompassing module that re-exports everything.

import * as Prelude from 'Prelude.js'
import Prelude from 'Prelude.js'


*/

// ============================================================== Data.Function

// id :: a -> a
const id = a => a

// const :: a -> b -> a
const konst = a => _ => a

// ($) :: (a -> b) -> a -> b
const apply = f => x => f(x)

// flip :: (a -> b -> c) -> b -> a -> c
import flip from '../src/flip.js';

// curry :: ((a, b, ...) -> z) -> (a -> b -> ... -> z)
import curry from '../src/curry.js';

// (.) :: (b -> c) -> (a -> b) -> a -> c
import compose from '../src/compose.js';

// pipe :: a -> (a->b) -> (b->c) -> ... -> (y->z) -> z
import pipe from '../src/pipe.js';

// memoize :: f -> f
import memoize from '../src/memoize.js';



// ============================================================== Data.Foldable

// foldl :: Foldable t => (b -> a -> b) -> b -> t a -> b
import foldl from '../src/foldl.js'

// foldr :: Foldable t => (a -> b -> b) -> b -> t a -> b
import foldr from '../src/foldr.js'

// scanl :: (b -> a -> b) -> b -> [a] -> [b]
import scanl from '../src/scanl.js';

// map :: (a -> b) -> [a] -> [b]
import map from '../src/map.js';

// filter :: (a -> Bool) -> [a] -> [a]
import filter from '../src/filter.js';


// reverse :: [a] → [a]
import reverse from '../src/reverse.js';

// iterate :: (a -> a) -> a -> [a]
import iterate from '../src/iterate.js';

// replicate :: Int -> a -> [a]
import replicate from '../src/replicate.js';

// ================================================================== Data.List
import {
    head, tail,
    init, last,
    cons, append,
    sum, product
} from '../lib/data.list.js'


// ====================================================================== misc
const log = console.log

const stringify = x => JSON.stringify(x, null, 2)


// ==================================================================== Prelude
export {
    id, konst, apply,
    flip, curry, compose, pipe,
    memoize,

    foldl, foldr,
    scanl,
    map, filter,
    reverse, iterate, replicate,

    head, tail,
    init, last,
    cons, append,
    sum, product,

    log, stringify
}
