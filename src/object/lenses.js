// lenses
// https://www.youtube.com/watch?v=IoVaArsh6tM

// --------------------------------------------------------------------- import
import curry from '../f/curry.js'


// --------------------------------------------------------------------- define
// prop :: s -> {s: a} -> a?
export const prop = curry((key, obj) => obj[key])

// assoc :: String -> a -> {k: v} -> {k: v}
export const assoc = curry((key, val, obj) => ({ ...obj, [key]: val }) )

// lens :: (s -> a) -> ((a -> s) -> s) -> Lens s a
export const lens = curry((get, set) => ({get, set}));

// view :: Lens s a -> s -> a
export const view = curry((lens, obj) => lens.get(obj));

// set :: Lens s a -> a -> s -> a
export const set = curry((lens, val, obj) => lens.set(val, obj));

// over :: Lens s a -> (a -> a) -> s -> s
export const over = curry((lens, f, obj) => lens.set(f(lens.get(obj), obj)));

// lensProp :: String -> Lens s a
export const lensProp = key => lens(prop(key), assoc(key));

// lensIndex :: Number -> Lens s a
export const lensIndex = idx => lens(prop(idx), assoc(idx));



// ---------------------------------------------------------------------- check
let o1 = {
    uno: 'one'   ,
    duo: 'two'   ,
    _t: 36,
    get t()  { return `The T is ${this._t} degrees.` }     ,
    set t(x) { x > -10 && x < 40 ? this._t = x : this._t } ,
}

console.log('\n',
    o1                      , '\n',
    o1.t                    , '\n',
    (o1.t = 28, o1.t)       , '\n',
    (o1.t = -8, o1.t)       , '\n',
    prop('t', o1)           , '\n',
    prop('m', o1)           , '\n',
)
