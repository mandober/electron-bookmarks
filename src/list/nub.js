// --------------------------------------------------------------------- import
import curry from '../f/curry.js'
import foldr from './foldr.js'

// ----------------------------------------------------------------- definition

// nub :: Eq a => [a] -> [a]


const nub_helper = curry((x, xs) =>
    xs.includes(x)
        ? xs
        : [x, ...xs]
);


const nub = foldr(nub_helper, [])

// --------------------------------------------------------------------- export
export default nub;



// ---------------------------------------------------------------------- check
console.log('\n',
    nub ([1,1,3,1]), '\n',
)



/*
nub: list deduplication

_nub = foldl (\xs x -> if x `elem` xs then xs else x:xs) []
nub_ = foldr (\x xs -> if x `elem` xs then xs else x:xs) []

_ = nub_ [1,1,3,1]                  -- [3,1]
_ = nub_ [3,1] == _nub [1,1,1,3,1]  -- True

*/
