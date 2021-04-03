// --------------------------------------------------------------------- import
import init from '../list/init.js'
import tail from '../list/tail.js'
import last from '../list/last.js'

// ----------------------------------------------------------------- definition
// base case:: if ϵ or 1 char then palindrom
// rec case :: compare head and last:
//               match :: check if xs is palindrom
//               else  :: not palindrom

const palindrome = xs =>
    xs.length === 0 || xs.length === 1
        ? true
        : xs[0] === xs[xs.length - 1]
            ? true
            : palindrome(init(tail(xs)) )
;

const pali = ([x, ...xs]) =>
    x === undefined || xs.length === 0
        ? true
        : x === last(pali(xs))
;

const rev = ([x, ...xs]) =>
    x === undefined
        ? []
        : [...rev(xs), x]




// --------------------------------------------------------------------- export
export default palindrome


// ----------------------------------------------------------------- imperative
const isPalindrome = s => s.split("").reverse().join("") === s
;

// ---------------------------------------------------------------------- check
console.log('\n',
    pali([]), '\n',
    pali([3]), '\n',
    pali([1,3]), '\n',
    pali([1,3,5,3,1]), '\n',
    pali([3,5,3,1]), '\n',

    palindrome ('')            , '\n',
    palindrome ('w')            , '\n',

    palindrome ('fuf')         , '\n',
    pali ('feee')        , '\n',

)
