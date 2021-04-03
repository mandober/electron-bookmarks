// ---------------------------------------------------------------------- about
/*
Combinations, n-choose-k

Select k elements from the n-element set S.
The powerset of the set S is the set of all S's subsets: P(S)
Cardinality of the powerset = |P(S)| = 2^n where n is |S|

Related concepts: combinations, powerset, binomial coefficients, Pascal's triangle, powers-of-two

*/

// --------------------------------------------------------------------- import
import curry  from '../f/curry.js'
import map    from './map.js'
import cons   from './cons.js'
import concat from './concat.js'


// ----------------------------------------------------------------- definition
// powerset :: [a] -> [[a]]
const powerset = ([x, ...xs]) =>
    x === undefined
        ? [[]]
        : [ ...powerset(xs), ...map(cons(x), powerset(xs)) ]
        //: concat( powerset(xs), map(cons(x), powerset(xs)) )
;

// --------------------------------------------------------------------- export
export default powerset;


// ---------------------------------------------------------------------- check
console.log('\n',
    powerset ([1]), '\n',
    powerset ([1,2,3]), '\n',
)

// ------------------------------------------------------------------------ alt
/*
powerset :: [a] -> [[a]]
powerset [] = [[]]
powerset (x:xs) = f ++ map (x:) f
            where f = powerset xs
*/
