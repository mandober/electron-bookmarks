// --------------------------------------------------------------------- import
import filter    from '../list/filter.js'
import filterout from '../list/filterout.js'
import curry from '../f/curry.js'

// ----------------------------------------------------------------- definition
// split an array in two: where p holds, and else
const partition = curry((p, [x,...xs], left=[], right=[]) =>
    x === undefined
        ? [left, right]
        : (
            p(x) ? left.push(x) : right.push(x)
            ,
            partition(p, xs, left, right)
        )
);


// --------------------------------------------------------------------- export
export default partition


// ----------------------------------------------------------------- imperative
function part(p, [...xs]) {
    let left = []
    let right = []
    for (const x of xs) {
        p(x) ? left.push(x) : right.push(x)
    }
    return [left, right]
}



// ---------------------------------------------------------------------- check

/*
const qs = p => ([x, ...xs]) =>
    x === undefined
        ? []
        : [
            ...qs(xs.filter(p)),
            x,
            ...qs(xs.filter(a => a >= x)),
          ]
;

partition odd [1,3,2,4] ~~> ([1,3], [2,4])

x == odd ? [x, left[]] : [x, right[]] ~~> [ [1,2], [3,4] ]


p(x) ? [x,...filter(p, xs)] : [...filter(p, xs)]

[ p(x) ? (x, ...filter(p, xs)) : (...filter(p, xs)) ]


*/

console.log('\n',
    // partition (x => x < 7) ([]), '\n',
    // partition (x => x === 1) ([1,2]), '\n',
    partition (x => x < 7) ([1,12,2,11,3,10,4,9,5,8,6,7]), '\n',

    part(x => x < 7, [1,12,2,11,3,10,4,9,5,8,6,7]), '\n',
)
