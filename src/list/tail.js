// tail :: [a] -> [a]
const tail = ([_, ...xs]) => xs


export default tail

// ---------------------------------------------------------------------- check
console.log('\n',
    tail ('')               , '\n',
    tail ('fuf')         , '\n',
    tail ([])         , '\n',
    tail ([2])         , '\n',
    tail ([1,2])         , '\n',
)
