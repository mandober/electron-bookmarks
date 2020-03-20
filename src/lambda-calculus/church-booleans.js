/*
Church Booleans

- Boolean constants: true, false
- Logical operators: and, or, not
- Conditionals: isZero, isOne, isGTZero, if

let Church = {
    True: a => _ => a,
    False: _ => b => b,
};

export default Church
*/



//const $$ = a => a;

const I = a => a;

const T = a => _ => a();
const F = _ => b => b();


const IF = s => a => b => s (a) (b);

const toJsBool = b => b (() => true) (() => false);
const toChBool = b => b ? () => true : () => false;

console.log(
    '\n',
    toJsBool(T), ' :=',
    toChBool(true).toString(), '\n',
    toJsBool(F), ':=',
    toChBool(false).toString(), '\n',
    '\n',
    //IF (T) (T) (F), '\n',
    IF (T) (()=> true) (() => false), '\n',

)
