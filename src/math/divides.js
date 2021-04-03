import curry from '../../src/f/curry.js'
import bail from '../../src/contracts/bail.js'

/*
divides: m | n    m divides n without remainder

divides :: Integral a => a -> a -> Bool
divides 0 _ = error "Division by zero"
divides d n = n `rem` d == 0
*/

// divides :: Integral a => a -> a -> Bool
const divides = curry((d, n) =>
    d === 0
        ? bail`[divides] Division by zero`
        : n % d === 0
);

export default divides;



console.log(
divides(2)(9),
divides(2,9),
divides(0,10),
)
