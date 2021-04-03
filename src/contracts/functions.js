// functions.js - function contracts
import die from './die.js'

// ----------------------------------------------------------------------------
const $Function  = x => typeof x === "function"  ? x : die(x, 'Function');
const $AsyncFunction     = x => _oStr(x) === '[object AsyncFunction]';
const $GeneratorFunction = x => _oStr(x) === '[object GeneratorFunction]';

/*
const $Callable = f =>
                             typeof f === 'function'
                                      ||
    Object.prototype.toString.call(f) === '[object Function]'
;

console.log('\n',
    $Callable(2), '\n',
    $Callable(g), '\n',
)


var toInt = function (value) {
    var number = Number(value);
    if (isNaN(number)) { return 0; }
    if (number === 0 || !isFinite(number)) { return number; }
    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
}

var maxSafeInt = Math.pow(2, 53) - 1;
    var toLength = function (value) {
    var len = toInteger(value);
    return Math.min(Math.max(len, 0), maxSafeInteger);
};
*/


// ----------------------------------------------------------------------------
// unary function
const $FunctionUnary = f => 
    typeof f === 'function'
        ? f.length === 1
            ? f
            : die(f, 'a unary function')
        : die(f, 'function')
;

// ----------------------------------------------------------------------------
// binary function
const $FunctionBinary = f => 
    typeof f === 'function'
        ? f.length === 2
            ? f
            : die(f, 'a binary function')
        : die(f, 'function')
;

// ----------------------------------------------------------------------------
const cap1 = f => x => f(x)
const cap2 = f => (x, y) => f(x, y)

let g = (a, b, c) => a**b



/*

// $FunctionUnary(g)
$FunctionUnary(cap1(g))

// $FunctionBinary(g)
$FunctionBinary(cap2(g))

$FunctionUnary(cap2(g))

// $Function.Binary
const foldrContract = [
    [
        { $FunctionBinary },
        { $FunctionBinary },
    ],
    { $FunctionBinary }
]

*/
