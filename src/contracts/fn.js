// functions.js - function contracts
import die from './die.js'

// ----------------------------------------------------------------------------
const ty = x => [typeof x]

// ----------------------------------------------------------------------------
const $Function  = x => typeof x === "function"  ? x : die(x, 'Function')
const $AsyncFunction     = x => _oStr(x) === '[object AsyncFunction]'
const $GeneratorFunction = x => _oStr(x) === '[object GeneratorFunction]'

// ----------------------------------------------------------------------------
console.log('\n',
    ty(x => x+3), '\n',
    ty(async x => x+3), '\n',
)
