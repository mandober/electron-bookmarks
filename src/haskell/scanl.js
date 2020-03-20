// scanl :: (b -> a -> b) -> b -> [a] -> [b]
const scanl = f => acc => ([x, ...xs]) =>
    x === undefined
        ? [acc]
        : [ acc, ...scanl (f) (f(acc, x)) (xs) ]
;


export default scanl

// [ acc, f(acc, x_0), ..., f(acc, x_n) ]



console.log('\n',
    scanl((a,b)=>a+b) (0) ([3,4,5,6]), '\n',
    scanl((a,b)=>a**b) (2) ([5]),      '\n',
)
