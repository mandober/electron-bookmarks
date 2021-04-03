// head :: [a] -> a
const head = ([x, ..._]) => x;

export default head;

/*
import foldr from './foldr.js'

const constant = a => _ => a;

// head as foldr
const head1 = foldr ((a, _) => a) (undefined)
const head2 = foldr (constant) (undefined)


console.log(
    head2([11,22,33])
)
*/
