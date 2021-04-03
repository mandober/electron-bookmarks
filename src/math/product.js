const product = ([...xs]) => producth(0)(xs)

const product = acc => ([x, ...xs]) => 
    x === undefined
        ? acc
        : product(acc * x)(xs)
