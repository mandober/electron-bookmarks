'use strict';

const is_numeric = x =>
    typeof x === 'number'
    ||
    typeof x === "string"
    &&
    Number.isSafeInteger(Number(x))
;

// export default is_numeric;


const is_numeric_string = str => {
    if (typeof str !== "string") return false;
    // let cn = undefined;

    try {
        // cn = Number(str);
        return Number.isSafeInteger(str);
    } catch(e) {
        return false;
    }

    //return Number.isSafeInteger(cn);
};

console.log(
    is_numeric_string(42),
    is_numeric_string('42'),
)


/*
object keys are either strings or symbols

Object whose own (payload) keys are safe integer strings are Array-like objects, (easily convertable to a proper array).


*/
function se(a,b,c) {
    console.log(arguments)
}
se(55,'hh',4)
