// --------------------------------------------------------------------- import
import apply from './apply.js'
import curry from './curry.js'
import flip  from './flip.js'
import foldr from '../list/foldr.js'
import cons from '../list/cons.js'

// ----------------------------------------------------------------- definition
const compose = (...fs) => (...xs) =>
    foldr((f, acc) => [f.call(null,...acc)], xs, fs)[0];

compose.f2 = curry((g, f)       => (...x )=>     g(f(...x)));
compose.f3 = curry((h, g, f)    => (...x )=>   h(g(f(...x))));
compose.f4 = curry((m, h, g, f) => (...x )=> m(h(g(f(...x)))));

// --------------------------------------------------------------------- export
export default compose;


// ---------------------------------------------------------------------- check

/*

const una = x => x + x
const bin = curry((x, y) => x * y)
const ter = curry((x, y, z) => x + y + z)

console.log('\n',
    // unary . unary . unary
    compose(una) (8)                                 , '\n',
    compose(una, una) (8)                            , '\n',
    compose(una, una, una) (8)                       , '\n',

    // binary . unary
    compose(bin, una)    (3) (2)            , '\n',
    compose.f2(bin, una) (3) (2)            , '\n',

    // ternary . unary
    compose(ter, una)    (3) (4) (5)        , '\n',
    compose.f2(ter, una) (3) (4) (5)        , '\n',

    // ternary . binary
    compose(ter, bin) (5, 2) (5) (15)          , '\n',
    compose.f2(ter, bin) (5, 2) (5) (15)          , '\n',
    //compose(ter, bin) (5)(2) (5) (15)        , '\n',
    //                  ^^^^^^ must be (5,2)
    // coz the target (in compose) is (...args)

    // binary . ternary
    compose(bin, ter) (5, 2, 6) (15)          , '\n',
    compose.f2(bin, ter) (5, 2, 6) (15)       , '\n',

    // unary . binary . ternary
    compose(ter, una) (3) (5) (8)         , '\n',
    compose(ter, una) (3) (5, 8)          , '\n',

    // unary . unary . unary
    compose(una, una, una) (3)             , '\n',
    compose(bin, una, una) (3) (4)         , '\n',
    compose(ter, una, una) (3) (4) (5)     , '\n',
    compose(ter, una, una) (3) (4, 5)      , '\n',

    compose(bin, bin, una) (3) (4)         , '\n', // NaN
    compose(bin, bin, una) (3) (4,5)       , '\n', // NaN
    compose.f3(bin, bin, una) (3) (2)         , '\n', // NaN
    compose.f3(bin, bin, una) (3) (1,2)       , '\n', // NaN
)


*/
