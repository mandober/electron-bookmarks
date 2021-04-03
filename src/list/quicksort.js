/*
quicksort []     = []
quicksort (x:xs) = quicksort (filter (<x) xs)
                   ++ [x] ++
                   quicksort (filter (>=x) xs)
*/

const quicksort = ([p, ...xs]) =>
    p === undefined
        ? []
        : [
            ...quicksort(xs.filter(x => x < p)),
            p,
            ...quicksort(xs.filter(x => x >=p)),
          ]
;



// ---------------------------------------------------------------------- check
console.log('\n',
    quicksort([4,2,7,5,3,6,1,9,8]), '\n',
    quicksort([1,4,3,5,6,9,8,7,5,2]), '\n',
    
)
