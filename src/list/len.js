// --------------------------------------------------------------------- about
// Get the size of an array, string, set, map


// ----------------------------------------------------------------- definition
const len = ([x,...xs]) =>
    x === undefined
        ? 0
        : 1 + len(xs)
;

// --------------------------------------------------------------------- export
export default len;


// ---------------------------------------------------------------------- check
let set1 = new Set([1,2,3,3,4])
let map1 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
])


console.log('\n',
    len([]), '\n',
    len([3]), '\n',
    len([3,4,5]), '\n',
    len('abcd'), '\n',
    set1.size, '\n',
    len(set1), '\n',
    map1.size, '\n',
    len(map1), '\n',
    map1
)
