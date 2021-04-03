// import curry from './curry.js';

// seq :: (a -> b1) -> (a -> b2) -> ... -> (a -> bN) -> [b1, b2,..., bN]
const seq = ([f,...fs]) => x =>
    f === undefined
        ? []
        : [f(x), seq(...fs)]


export default seq;

// seq takes one or more functions and applies 'em sequentially to the same
// argument(s). Handy for performing a sequence of related but independent ops.
// e.g. after finding the resource, use seq to both render the results to a
// HTML page and dump 'em to the console.
