/*
quicksort :: Ord a => [a] -> [a]
quicksort []     = []
quicksort (x:xs) = quicksort [a | a <- xs, a <= x]
                   ++ [x] ++
                   quicksort [a | a <- xs, a >  x]
*/


// quicksort :: Ord a => [a] -> [a]
const quicksort = ([p, ...xs]) =>
    p === undefined
        ? []
        : [
            ...quicksort(xs.filter(a => a <= p)),
            p,
            ...quicksort(xs.filter(a => a > p)),
          ]
;



console.log('\n',
    quicksort([1,4,3,5,6,9,8,7,5,2]), '\n',
)
