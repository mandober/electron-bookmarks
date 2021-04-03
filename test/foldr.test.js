// --------------------------------------------------------------------- import
import chai from 'chai'
import foldr from '../src/list/foldr.js'

// ----------------------------------------------------------------------- unit
describe('foldr test', function () {

    const arr1 = [ 2, 4, 8, 16 ]

    it(`sum = foldr (+) 0`, () => {
        chai.assert.equal(
            foldr ((a,b) => a+b) (0) (arr1),
            30
        )
    })

    it(`sum as foldr curryied`, () => {
        chai.assert.equal(
            foldr (a => b => a + b) (0) (arr1),
            30
        )
    })

    it(`product = foldr (*) 1`, () => {
        chai.assert.equal(
            foldr ((a,b) => a*b) (1) (arr1),
            1024
        )
    })

})
