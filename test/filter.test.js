// --------------------------------------------------------------------- import
import chai from 'chai'
import filter from '../src/list/filter.js'

// ----------------------------------------------------------------------- unit
describe('filter test', function () {

    const a1 = [3,4,5,6,7]
    let sparse1 = Array(5); sparse1[2]=2; sparse1[4]=4;
    let sparse2 = [0, 1, ...Array(5), 7, ...Array(3), 11]


    it(`keeps el < 4`, () => {
        chai.assert.deepEqual(
            filter (x => x < 4) (a1),
            [3]
        )
    })

    it(`filters a very sparse1 array`, () => {
        chai.assert.deepEqual(
            filter(Boolean, sparse1),
            [2,4]
        )
    })

    it(`filters a very sparse2 array`, () => {
        chai.assert.deepEqual(
            filter (Boolean) (sparse2),
            [0,1,7,11]
        )
    })


})
