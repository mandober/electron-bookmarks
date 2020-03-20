'use strict';

// Array-like is an object whose keys are numeric (strings)
const isArrayLike = obj => {
    for (let ob in obj) {
        console.log(ob)

    }
};

// (typeof x === "object") && 'length' in Reflect.ownKeys(x)

// obj.hasOwnProperty('0')


let ob1 = {
    'a': 'a',
    'b': 'b',
    'c': 'c'
}

let ob2 = {
    '0': 'a',
    '1': 'b',
    '2': 'c'
}

isArrayLike(ob1)

isArrayLike(ob2)

// export default isArrayLike;
