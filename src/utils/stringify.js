/**
 * Convert a value of any type into a string using JSON.stringify
 *
 * stringify :: a -> String
 *
 */
const stringify = x => JSON.stringify(x, null, 2)
export default stringify
