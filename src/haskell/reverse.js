// reverse :: [a] -> [a]
const reverse = ([x, ...xs]) =>
    x === undefined
        ? []
        : [...reverse(xs), x]
;

export default reverse




// reverse :: [a] → [a]
// reverse = foldr (\ x xs -> xs ++ [x]) []
import foldr from './foldr.js'

// pointed
const reverse_foldr = arr => foldr ( (x, acc) => [...acc, x] ) ([]) (arr)
// or, point-free
const reverse_foldr_pf = foldr ( (x, acc) => [...acc, x] ) ([])


console.log(
    '\n',
    reverse          ( [3,4,5,6] ), '\n',
    reverse_foldr    ( [3,4,5,6] ), '\n',
    reverse_foldr_pf ( [3,4,5,6] ), '\n',
)
