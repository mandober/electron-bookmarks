// scanr :: (a -> b -> b) -> b -> [a] -> [b]
const scanr = f => acc => ([x, ...xs]) =>
    x === undefined
        ? [acc]
        : [ f (x, (scanr(f)(acc)(xs)) ) ]
;

export default scanr;


// [ f(acc, x_0), ..., f(acc, x_n), acc ]
// [ f (x, scanr (f) (acc) (xs) ), acc ]

// [ acc, f(acc, x_0), ..., f(acc, x_n) ]
// [ acc, ...scanl (f) (f(acc, x)) (xs) ]



console.log( '\n',
    scanr((x,acc)=>x+acc) (0) ([3,4,5,6]), '\n',
    // scanr (+) 0 [3,4,5,6]     [18,15,11,6,0]

    // scanr( (a,b)=>a**b ) (2) ( [5] ),'\n',
    // scanr (*) 1 [2,5]     -- [10,5,1]

)

/*


scanr f acc []     =  [acc]
scanr f acc (x:xs) =  f x q : qs
                      where qs@(q:_) = scanr f acc xs

*/
