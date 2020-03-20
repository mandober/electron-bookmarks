'use strict';

//
const isNumeric = x =>
    typeof x === 'number'
    ||
    typeof x === "string"
    &&
    Number.isSafeInteger(Number(x))
;

export default isNumeric;

/*
const isNumeric_string = str => {
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
*/
