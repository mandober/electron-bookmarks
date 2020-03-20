'use strict';

import chai from 'chai'
import scanr from '../src/haskell/scanr.js'

chai.assert.deepStrictEqual(
    scanr ((a,b)=>a+b) (0) ([3,4,5,6]),
    [18,15,11,6,0]
)





/*
scanr (*) 3 [2,5]        -- [30,15,3]
scanr (+) 0 [3,4,5,6]    -- [18,15,11,6,0]
*/
