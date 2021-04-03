// zip :: [a] -> [b] -> [(a, b)]
const zip = ([x, ...xs]) => ([y, ...ys]) =>
    x === undefined
        ? []
        : y === undefined
            ? []
            : [[x,y], ...zip(xs)(ys)]
;

export default zip



console.log(
    '\n',
    zip ( [1,3,5,7] ) ( [2,4,6,8] ), '\n',
    zip ( [1,3,5,7] ) ( [2,4]     ), '\n',
    zip ( [1,3,5]   ) ( [2,4,6,8] ), '\n',
    zip ( []        ) ( [2,4,6,8] ), '\n',
    zip ( []        ) ( []        ), '\n',
)
