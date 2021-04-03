// singly-linked list

import curry from '../f/curry.js'
import foldr from '../list/foldr.js'



// ============================================================================
class Node {
    constructor (x) {
        this.data = x
        this.next = null
    }
}

class List {
    constructor () {
        this.head = null
        this.length = 0
    }

    cons(x) {
        let n = new Node(x)
        n.next = this.head
        this.head = n
        this.length += 1
        return this
    }

    '!!'(n) {
        if (n < 0) throw Error('!! got negative index.');
        if (n === 0) return this.head();
        return this.tail()['!!'](n - 1);
    }
}


// ============================================================================
const emptyList = new List();

const cons = (x, xs) => xs.cons(x);

const fromIterable = ([...xs]) => foldr(cons, emptyList, xs);




// ============================================================================
let m = new List()
m.cons(3).cons(2).cons(1)

const str = x => JSON.stringify(x, null, 2)

const arr1 = [4,5,6]

const set1 = new Set([11,21,12])


// ============================================================================



// ============================================================================
console.log('\n',
    // m, '\n',
    // set1, '\n',
    // str(m), '\n',

    // fromIterable(arr1), '\n',
    // str(fromIterable(arr1)), '\n',

    fromIterable(set1), '\n',
    str(fromIterable(set1)), '\n',

)



// let lst = new List([1,2,3])
