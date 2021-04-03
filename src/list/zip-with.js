// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = f => ([x, ...xs]) => ([y, ...ys]) =>
    x === undefined
        ? []
        :  y === undefined
            ? []
            : [f(x,y), ...zipWith(f)(xs)(ys)]
;

export default zipWith


/*
console.log(
    '\n',
    zipWith( (a,b)=>a+b ) ( [1,3,5,7] ) ( [2,4,6,8] ), '\n',
    zipWith( (a,b)=>a+b ) ( [1,3,5,7] ) ( [2,4]     ), '\n',
    zipWith( (a,b)=>a+b ) ( [1,3,5]   ) ( [2,4,6,8] ), '\n',
    zipWith( (a,b)=>a+b ) ( []        ) ( [2,4,6,8] ), '\n',
    zipWith( (a,b)=>a+b ) ( []        ) ( []        ), '\n',
)
*/
