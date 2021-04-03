// take :: Int -> [a] -> [a]
const take = n => ([x, ...xs]) =>
    n < 1 || x === undefined
        ? []
        : [x, ...take(n-1)(xs)]


export default take



console.log(
    '\n',
    take (3) ( [1,3,5,7,2,4,6,8] ), '\n',
    take (3) ( [1] ), '\n',
    take (3) ( [] ), '\n',
)
