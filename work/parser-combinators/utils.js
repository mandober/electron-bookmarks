// clip a string to 10 chars + ...
export const clip = (str, len = 10) =>
    str.length > 10 ? str.slice(0,len) + '...' : str

// fail with a msg
export const panic = msg => (function () { throw new Error(msg) })

// flatMap = map . flat(1)
export const flatMap = (arr, f) => arr.reduce((arr, x) => arr.concat(f(x)),[])
