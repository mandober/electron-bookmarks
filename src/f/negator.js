// decorator: negate
// negate a predicate function
// negate a fn passed to filter
import compose from './compose.js'

// notp :: (a -> b -> Bool) -> a -> b -> Bool
const notp = p => x => !(p(x))


// ---------------------------------------------------------------------- check
// p :: a -> Bool
const p = x => x < 4;
const r = x => x >= 4;


console.log('\n',
    p(2), '\n',
    notp(p)(2), '\n',
    [1,2,3,4,5,6].filter(p), '\n',
    [1,2,3,4,5,6].filter(r), '\n',
    [1,2,3,4,5,6].filter(compose(notp,p)), '\n',

)
