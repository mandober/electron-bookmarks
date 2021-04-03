// bind :: [a] -> (a -> [b]) -> [b]
const bind = ([x, ...xs]) => f =>
    x === undefined
        ? []
        : [ f(x), ...bind(xs)(f) ].flat(Infinity)
;

export default bind;
