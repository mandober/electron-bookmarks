// --------------------------------------------------------------------- import
//import assert from 'assert'
import curry from '../f/curry.js'
// import foldr from './foldr.js'
// import cons from './cons.js'

// ----------------------------------------------------------------- definition
// filter :: (a -> Bool) -> [a] -> [a]
const filter = curry((p, [x,...xs]) =>
    x === undefined
        ? []
        : p(x)
            ? [x, ...filter(p, xs)]
            : [   ...filter(p, xs)]
);



// --------------------------------------------------------------------- export
export default filter


// ------------------------------------------------------------------------ alt
/*
filter p = foldr (\x xs -> if p x then x:xs else xs) []

const filter2 = p => foldr ( (x, e) => p(x) ? (cons(x,e)) : e ) ([])


p(x) ? [x,...filter(p, xs)] : [...filter(p, xs)]

[ p(x) ? (x, ...filter(p, xs)) : (...filter(p, xs)) ]


*/

// --------------------------------------------------------------------- assert

/*
assert.deepStrictEqual(filter(a => a <  4, [3,4,5,6,7]), [3])
assert.deepStrictEqual(filter(a => a <= 4, [3,4,5,6,7]), [3,4])
assert.deepStrictEqual(filter(a => a >  4, [3,4,5,6,7]), [5,6,7])
assert.deepStrictEqual(filter(a => a >= 4, [3,4,5,6,7]), [4,5,6,7])


let a0 = [0, 1, ...Array(5), 7, ...Array(3), 11]
let a1 = Array(5); a1[6] = 66; a1[16] = 166

// assert.deepStrictEqual(filter(Boolean, a0), [])
// assert.deepStrictEqual(filter(Boolean, a1), [66,166])

*/

// ---------------------------------------------------------------------- check

/*

console.log('\n',
    filter(a => a > 4) ( [3,4,5,6,7,8,7,4,5,6,3,2,1,2,3,3,6,5] ), '\n',

        filter(a => a > 4) ( [3,4,5,6,7] ), '\n',
        filter(a => a >= 4)( [3,4,5,6,7] ), '\n',
        filter(a => a < 4) ( [3,4,5,6,7] ), '\n',
        filter(a => a <= 4)( [3,4,5,6,7] ), '\n',

        a1, '\n',
        a1.filter(Boolean), '\n',
        filter(x=>!!x, a1), '\n',

        filter2(a => a > 4) ( [3,4,5,6,7] ), '\n',
        filter2(a => a >= 4)( [3,4,5,6,7] ), '\n',
        filter2(a => a < 4) ( [3,4,5,6,7] ), '\n',
        filter2(a => a <= 4)( [3,4,5,6,7] ), '\n',
)
*/
