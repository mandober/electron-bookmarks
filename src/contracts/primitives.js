/* contracts - JS types constraints */

import die from './die.js'
import toTitleCase from '../utils/toTitleCase.js'

// ============================================================================
// private helpers
// ============================================================================

const _oStr = x => Object.prototype.toString.call(x)

const _ty = x => t => typeof x === t ? x : die(x, toTitleCase(t))

// _ty ('abc') ('number');


// ============================================================================
// Primitives
// ============================================================================
const $Boolean   = x => typeof x === 'boolean'   ? x : die(x, 'Boolean')
const $Number    = x => typeof x === 'number'    ? x : die(x, 'Number')
const $String    = x => typeof x === "string"    ? x : die(x, 'String')
const $Symbol    = x => typeof x === "symbol"    ? x : die(x, 'Symbol')
const $BigNum    = x => typeof x === "bigint"    ? x : die(x, 'BigInt')
const $Object    = x => typeof x === "object"    ? x : die(x, 'Object')

// ============================================================================
// Unexpected values
// ============================================================================
const $Undefined = x => typeof x === 'undefined'  ? x : die(x, 'undefined')
const $Null      = x =>        x === 'null'       ? x : die(x, 'null')
const $Nullish   = x => $Null(x) || $Undefined(x) ? x : die(x, 'nullish')

// ============================================================================
// Builtins
// ============================================================================
const $Array   = x => Array.isArray(x)    ? x : die(x, 'Array')
const $RegExp  = x => _oStr(x) === '[object RegExp]'
const $Date    = x => _oStr(x) === '[object Date]'
const $Set     = x => _oStr(x) === '[object Set]'
const $WeakSet = x => _oStr(x) === '[object WeakSet]'
const $Map     = x => _oStr(x) === '[object Map]'
const $WeakMap = x => _oStr(x) === '[object WeakMap]'


// ============================================================================
// Numbers
// ============================================================================
const $Integer = x => Number.isInteger(x) ? x : die(x, 'Integer')
const $Finite  = x => Number.isFinite(x)  ? x : die(x, 'Finite')

// numeric string
const $StrNum = x => typeof x === "string" && Number.isFinite(x)

// natural number = {0,1,2...2^31-1}
const $Nat = x => (x | 0 === x) || (x < 0) ? x : die(x, 'Nat')

// integer
const $Int = x => (x | 0 === x) ? x : die(x, 'Int')


// ============================================================================
// Arrays
// ============================================================================
// make sure the array arg is:
//   an array                          ✔
//   an array of T (e.g. T = Int)
//   an array of functions: T = a -> b
//   has exactly n elements


// ============================================================================
// Functions
// ============================================================================
// make sure the function arg is:
//   a function                         ✔
//   unary: a -> z
//   binary: (a, b) -> z  OR  a -> b -> z
//   takes 2 args as 2-tuple: (a, b) -> z
//   ternary
//   takes 3 args as 3-tuple: (a, b, c) -> z
//   n-ary
//   invertable function
//   a -> b (e.g. from Number to String)
//   returns the type a
//   injective
//   surjective
//   bijective
//   only called once
//   2nd arg is the id element of the type in 3rd arg



// ============================================================================
// EXPORT
// ============================================================================
export {
    $Boolean,
    $Number,
    $String,
    $Symbol,
    $BigNum,
    $Object,
    $Function,
    $Array,
}
