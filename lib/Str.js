/*
Data.String

Convert letter-case
- toUpperCase       TO UPPER CASE
- toLowerCase       to upper case
- toTitleCase       To Upper Case
- toSentenceCase    To upper case
- toPascalCase      ToPascalCase
- toCamelCase       toCamelCase
- toSnakeCase       to_snake_case
- toKebabCase       to-kebab-case
- toDotCase         to.dot.case
- toToggleCase      TOtOGGLEcASE



class IsString a where
    fromString :: String -> a

type String = [Char]

lines   :: String   -> [String]
unlines :: [String] -> String
unwords :: [String] -> String
words   :: String   -> [String]
*/

// ============================================================================
const toStr = exp => '' + exp
const toString = exp => String(exp)
const toStringBox = exp => new String(exp)




// ============================================================================
var exp1 = 'low HI ToGGle dUnG'.split(' ')
var exp2 = (a,b) => a + b

console.log(
    '\n',
    exp1, '\n',
    toStr(exp1), '\n',
    toString(exp1), '\n',
    toStringBox(exp1), '\n',

    toString(exp2), '\n',
    toStringBox(exp2), '\n',
)
