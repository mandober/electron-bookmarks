// replicate :: Int -> a -> [a]
const replicate = n => x =>
    n === 1
    ? [x]
    : [x, ...replicate (n-1) (x)]
;


export default replicate





/*
console.log(
    replicate(4)(100)
)
*/
