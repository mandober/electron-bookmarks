// --------------------------------------------------------------------- import
import curry from '../../src/f/curry.js'

import apply from '../../src/f/apply.js'
import foldr from '../../src/list/foldr.js'

// ----------------------------------------------------------------- definition
const compose2 = curry((g, f) => (...x) => g(f(...x)));

// --------------------------------------------------------------------- export
export default compose2;




// ------------------------------------------------------------------------ alt

const compose = (...fs) => x => foldr(apply, x, fs);

const compose3 = curry((h, g, f) => x => h(g(f(x))));

const composeNP = (...fs) => (...xs) => foldr(apply, xs, fs);

const compo = (...fns) => (...args) =>
    fns.reduceRight(
        (res, fn) => [ fn.call(null, ...res) ], // for acc is an array
        args
    )[0];


const comp = (...fs) => (...xs) =>
    foldr((f, acc) => [ f(...acc) ], xs, fs)[0];
    //                ^^^^^^^^^^^^^ for acc started as an array (of args)



// ---------------------------------------------------------------------- check
const una = x => x + x
const bin = curry((x, y) => x * y)
const ter = curry((x, y, z) => x + y + z)


console.log('\n',

    // compose2(x=>x+5, x=>x*2, x=>x*3) (2), '\n',
    // compose2(x=>x+5, x=>x*2, x=>x*3) (2), '\n',
    compose(una) (8)                                 , '\n',
    compose(una, una) (8)                            , '\n',
    compose(una, una, una) (8)                       , '\n',
    
    compose2(una, una) (8)                           , '\n',
    compose3(una, una, una) (8)                      , '\n',
    
    compose2(una, compose2(una, una)) (8)            , '\n',
    
    compose2(bin, una) (3) (2)        , '\n',
    compose(bin, una)  (3) (2)        , '\n',
    
    compose(bin, una) (3) (2)        , '\n',
    compose2(bin, una) (3) (2)        , '\n',
    
    compose(ter, una)  (3) (4) (5)    , '\n',
    compose2(ter, una) (3) (4) (5)    , '\n',
    '\n',
    compose(una) (8)                                 , '\n',
    compose(bin) (8) (5)                             , '\n',
    compose(ter) (8) (5) (4)                            , '\n',
    '\n',
    compose(una, bin) (8, 3)                             , '\n',

    compo(una, bin) (8, 3)                             , '\n',
    comp(una, bin) (8, 3)                             , '\n',


    //compose2(ter, bin) (3) (2) (3)        , '\n',
)
