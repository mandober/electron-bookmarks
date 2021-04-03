import foldr from '../foldr.js'
import add from './add.js'
// ----------------------------------------------------------------------------
// sum :: Number a => [a] -> a
const sum = ([...xs]) => foldr (add) (0) (xs);

export default sum;

// ----------------------------------------------------------------------------
/*

const sum = ([...xs]) => sumrec(0)(xs)

const sumrec = acc => ([x, ...xs]) => 
    x === undefined
        ? acc
        : sumrec(acc + x)(xs)
// ----------------------------------------------------------------------------
foldr (+)   (0) ([2,3,5])
foldr (op`+`) (0) ([2,3,5])

foldr (add) (0) ([2,3,5])
foldr (mul) (0) ([2,3,5])
// ----------------------------------------------------------------------------

sum a list of lists:

sum_matrix = sum . map sum

const sum_matrix = compose(sum, map(sum))


*/
// ----------------------------------------------------------------------------

console.log(
    '\n',
    sum([]),    '\n',

    sum([55]),    '\n',
    sum([55, 14, 57]),'\n',

    sum(['22']), '\n',
    sum(['22', '32']), '\n',
)
