'use strict';

import chai from 'chai'
import scanl from '../src/haskell/scanl.js'

chai.assert.deepStrictEqual(
    scanl ((a,b)=>a+b) (0) ([3,4,5,6]),
    [0,3,7,12,18]
)


/*
console.log('\n',
    scanl((a,b)=>a+b) (0) ([3,4,5,6]), '\n',
    scanl((a,b)=>a**b) (2) ([5]),      '\n',
)
*/


/*
[ acc, f(acc, x_0), ..., f(acc, x_n) ]

scanl (+) 0 [3,4,5,6]    -- [0,3,7,12,18]
scanl (*) 1 [2,3,4]      -- [1,2,6,24]
scanl (*) 10 [2,3,4]     -- [10,20,60,240]

scanr (+) 0 [3,4,5,6]    -- [18,15,11,6,0]
*/
