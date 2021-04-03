import curry from './curry.js';

// alt :: (a -> b) -> (a -> c) -> Either b c
const alt = curry((f, g, x) => f(x) || g(x));

export default alt;

// alt can be a handy way to create the resource if the search for it fails
// (insert an element into a DS if it doesn't already exist)
