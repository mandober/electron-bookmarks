// type :: a -> String
const type = x =>
    x != null &&
    x.constructor != null &&
    x.constructor.prototype !== x &&
    typeof x.constructor['@@type'] === 'string'
        ? x.constructor['@@type']
        : Object.prototype.toString.call(x).slice(8, -1)
;

export default type;


// Identity :: a -> Identity a
function Identity(x) {
    if (!(this instanceof Identity)) return new Identity(x)
    this.value = x
}

Identity['@@type'] = 'my-package/Identity'

console.log(
type(null), // => 'Null'
type(true), // => 'Boolean'
type([1, 2, 3]), // => 'Array'
type(Identity), // => 'Function'
type(Identity(0)), // => 'my-package/Identity'
)
