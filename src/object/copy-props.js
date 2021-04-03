// copy props from src to dest object,
// except for excluded properties given as a list of strings.
const copyProps = (...excluded) => src => (dest = {}) => {
    dest['zero'] = 0
    dest['bottom'] = false
}

const spn = Symbol('secret prop name')

let obj1 = {
    prop1: 'one',
    bottom: false,
    zero: 0,
    fun: x => 2 * x,
    ter: (a,b) => Number.isFinite(a) ? 42 : b,
    [spn]: 'activate!',
    prop2: true,
}

let o2 = copyProps ('prop1', 'prop2') (obj1) ({})

console.log({})
console.log(o2)


/*
console.log({})

► {}

▼ {} ℹ
  ► __proto__: Object

▼ {} ℹ
  ▼ __proto__:
    ► constructor: ƒ Object()
    ► hasOwnProperty: ƒ hasOwnProperty()
    ► isPrototypeOf: ƒ isPrototypeOf()
    ► propertyIsEnumerable: ƒ propertyIsEnumerable()
    ► toLocaleString: ƒ toLocaleString()
    ► toString: ƒ toString()
    ► valueOf: ƒ valueOf()
    ► __defineGetter__: ƒ __defineGetter__()
    ► __defineSetter__: ƒ __defineSetter__()
    ► __lookupGetter__: ƒ __lookupGetter__()
    ► __lookupSetter__: ƒ __lookupSetter__()
    ► get __proto__: ƒ __proto__()
    ► set __proto__: ƒ __proto__()
*/
