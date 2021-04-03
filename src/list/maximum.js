// --------------------------------------------------------------------- import
import foldr from './foldr.js'

// ----------------------------------------------------------------- definition
/*
The maximum of a list:
- the maximum of the empty list is the empty list
- the maximum of a singleton list is that sole element
- the maximum of a list:
  if the head is bigger than the maximum of the tail: it is the head,
  otherwise:            it's the maximum of the tail
*/
// maximum :: Ord a => [a] -> a
const maximum = ([x,y, ...xs]) =>
    x === undefined
        ? []
        : y === undefined
            ? x
            : x > maximum([y,...xs]) ? x : maximum([y,...xs])
;


// --------------------------------------------------------------------- export
export default maximum;

// ------------------------------------------------------------------------ alt

const maximum2 = foldr (Math.max) (-Infinity)

// ---------------------------------------------------------------------- check
console.log('\n',
    maximum ([1, -22, 4, -33, 54, 24, -6]) , '\n',
    maximum ([]) , '\n',
    maximum ([-22]) , '\n',
    maximum ([22, 3, 4, 6]) , '\n',

    maximum2 ([22, 3, 4, 6]) , '\n',
    maximum2 ([]) , '\n',

)


/*
maximum' :: (Ord a) => [a] -> a
..
maximum' (x:xs) = max x (maximum' xs)

max(x, maximum(xs))
*/
