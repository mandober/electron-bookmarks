// toTitleCase :: String -> String
const toTitleCase = ([x, ...xs]) =>
    x.toUpperCase() + xs.join('').toLowerCase()
;

export default toTitleCase;


/*
console.log(
    toTitleCase('abcdef'), '\n',
    toTitleCase('ABCDEF'), '\n',
    toTitleCase('Abcdef'), '\n',
    toTitleCase('aBCDEF'), '\n',
)
*/
