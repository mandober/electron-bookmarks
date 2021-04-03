function* range(start = 0, end = 0, step = 1) {
    // start = start || 0
    if (end === 0) [end, start] = [start, 0]
    // console.log(start, end);
    for (let i = start; i < end; i += step) yield i
}

export default range


// ================================================================ CHECK

/*
iterate over the generator
for (let i of range(1, 10))
    console.log(i)

// iterate step-by-step
let it = range(1, 3) // returns iterator
it.next() // {value: 1, done: false}
it.next() // {value: 2, done: false}
it.next() // {value: undefined, done: true}
// once depleted, it continually returns undefined
it.next() // {value: undefined, done: true}
*/

function* seq([x, ...xs]) {
    x === undefined
        ? []
        : (yield x, yield* seq(xs))
}



const collect = iterator => {
    let arr = []
    for (const it of iterator) {
        arr.push(it)
    }
    return arr
}


let it = seq([2,3,4,6,8,99,999,99999])

console.log(collect(it))
