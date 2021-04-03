/* contracts - JS types constraints */

import die from './die.js'
import toTitleCase from '../utils/toTitleCase.js'

// ============================================================================
// private helpers
// ============================================================================

const _oStr = x => Object.prototype.toString.call(x)

const _ty = x => t => typeof x === t ? x : die(x, toTitleCase(t))


/**
 * Make contract for a value of type s.
 * 
 * @param  String s Expected type.
 * @param  any    x Received type.
 * @return any    Return receied (i.e. expected) value or die.
 */
const mkPrimitiveContract = s => x => typeof x === s ? x :die(x, toTitleCase(s))

const $Symbol  = mkPrimitiveContract("symbol")
const $Boolean = mkPrimitiveContract("boolean")



// ============================================================================
// Primitives
// ============================================================================
const $String    = x => typeof x === "string"    ? x : die(x, 'String')
const $Number    = x => typeof x === 'number'    ? x : die(x, 'Number')
const $BigNum    = x => typeof x === "bignum"    ? x : die(x, 'BigNum')
const $Object    = x => typeof x === "object"    ? x : die(x, 'Object')
const $Function  = x => typeof x === "function"  ? x : die(x, 'Function')
// const $Boolean   = x => typeof x === 'boolean'   ? x : die(x, 'Boolean')
// const $Symbol    = x => typeof x === "symbol"    ? x : die(x, 'Symbol')
const $Undefined = x => typeof x === 'undefined' ? x : die(x, 'undefined')
const $Null      = x =>        x === 'null'      ? x : die(x, 'null')

// ============================================================================
// EXPORT
// ============================================================================
export {
    $Boolean,   // 1
    $Number,    // 2 Num class: Number + BigNum + NumericStrings
    $BigNum,    // 3
    $String,    // 3
    $Symbol,    // 4
    $Object,    // 6
    $Function,  // +
}
