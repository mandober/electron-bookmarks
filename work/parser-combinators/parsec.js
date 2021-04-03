/*
Monadic Parser Combinators
=========================

http://www.cs.nott.ac.uk/~pszgmh/monparsing.pdf

COMBINATOR PARSERS
=====================
define:
- type for parsers: type Parser a = String -> [(a,String)]
- 3 primitive parsers
- 2 primitive parser combinators for building larger parsers

THE TYPE OF PARSERS
===================
We start by thinking of a PARSER AS A FUNCTION that takes a string of chars and yields some kind of TREE as result:
    type Parser = String -> Tree

However, a parser might not consume all of its input, so we also return the unconsumed suffix of the input:
    type Parser = String -> (Tree, String)

However, a parser might fail on its input. Rather than just reporting an error, we choose to have parsers return a list of pairs (rather than a single pair), where the empty list denotes parser failure, and singleton success:
    type Parser = String -> [ (Tree, String) ]

Having an explicit representation of failure and returning the unconsumed part of the input string makes it possible to define combinators for building up parsers piecewise from smaller parsers. Returning a list of results opens up the possibility of returning more than one result if the input string can be parsed in more than one way, which may be the case if the underlying grammar is ambiguous.

However, different parsers will likely return different kinds of trees, so we parameterize the type of trees, making the type of result values a parameter to the Parser type:

    type Parser a = String -> [ (a, String) ]


PRIMITIVE PARSERS
=================
These 3 primitive parsers are the building blocks of COMBINATOR PARSING:

result
    The result parser always succeeds without consuming any
    of the input string, and returns the single result, v.

zero
    The zero parser always fails, regardless of the input string.

item
    The item parser consumes the first character successfully
    if the input string is non-empty, and fails otherwise.


type Parser a = String -> [ (a, String) ]


List of (value, String) pairs: [ [value, String] ]
~ [ ['a','bcdef'], ['b','cdef'], ['c','def'] ]


PRIMITIVE PARSER COMBINATORS
============================

sat

Using the bind combinator, we can now define `item` parser that consumes a single character unconditionally; in practice, we are only interested in consuming some specific characters, so we can use `item` to define a combinator `sat` that takes a predicate and yields a parser that consumes a single character if it satisfies the predicate (and fails otherwise)

sat :: (Char -> Bool) -> Parser Char
sat p = item `bind` (\x -> if p x then result x else zero)

Note that if `item` fails (that is, if the input string is empty),
then so does `sat p`, since it can be observed that
    zero `bind` f = zero
for all functions f of the appropriate type. This equation is not specific to parsers - it holds for any arbitrary monad with a zero.

*/

// ----------------------------------------------------------------------------
// result :: a -> Parser a
// result v inp = [(v, inp)]
const result = v => inp => [[v, inp]]

// zero :: Parser a
// zero inp = []
const zero = _ => []

// item :: Parser Char
// item [] = []
// item (x:xs) = [(x,xs)]
const item = ([x, ...xs]) =>
    x === undefined
        ? []
        : [[x, xs.join('')]]
;

// ----------------------------------------------------------------------------
// ap :: [(a -> b)] -> [a] -> [b]
const ap = ([f, ...fs]) => ([...xs]) =>
    f === undefined
        ? []
        : [ ...map(f)(xs), ...ap(fs)(xs) ]
;

// bind :: Parser a -> (a -> Parser b) -> Parser b
// bind p f = \inp -> concat [f v inp' | (v,inp') <- p inp]
// bind p f inp = concat [ f v inp' | (v,inp') <- p inp ]

// bind :: [a] -> (a -> [b]) -> [b]
// const bind = ([x, ...xs]) => f => inp =>
//     x === inp
//         ? []
//         : [ f(x), ...bind(xs)(f) ].flat(Infinity)
// ;

// ----------------------------------------------------------------------------
// sat :: (Char -> Bool) -> Parser Char
// sat p = item `bind` (\x -> if p x then result x else zero)
// sat p = bind (item) (\x -> if p x then result x else zero)

// const sat = p => bind (item) ((x => p(x) ? result(x) : zero));

/*

p = (\y -> y === 'm')

item          >>= (x => p(x)   ? result(x) : zero)
['m' : 'ist'] >>= (x => p(x)   ? result(x) : zero)
['m' : 'ist'] >>= (x => p('m') ? result('m') : zero)

result = v => inp => [[v, inp]]
result =      inp => [['m', inp]]



*/

// ----------------------------------------------------------------------------
// char :: Char -> Parser Char
// char x = sat (\y -> x == y)
// const char = x => sat(y => x === y)

// digit :: Parser Char
// digit = sat (\x -> '0' <= x && x <= '9')
// const digit = sat(x => '0' <= x && x <= '9')

// lower :: Parser Char
// lower = sat (\x -> 'a' <= x && x <= 'z')
// const lower = sat(x => 'a' <= x && x <= 'z')

// upper :: Parser Char
// upper = sat (\x -> 'A' <= x && x <= 'Z')
// const upper = sat(x => 'A' <= x && x <= 'Z')


// twoLowerChars =
//   lower `bind` \x ->
//     lower `bind` \y ->
//       result [x,y]
// const twoLowerChars =
//     bind (lower) (x =>
//         bind (lower) (y => result([x,y]))
//     )
// ;

// twoLowerChars "abcd"   --- [("ab","cd")]
// twoLowerChars "aBcd"   --- []

// ----------------------------------------------------------------------------
console.log('\n',
    item('anabel'), '\n',
    //bind ([1,2,3]) (x => [x*2, x*4]), '\n',
    //bind (zero) (f) == zero
    //twoLowerChars ("abcd"), '\n',
    (p => x => p(x) ? result(x) : zero) (ch => ch === 'g') ('g') ('greta')
    , '\n',
    (p => x => p(x) ? result(x) : zero) (ch => ch === 'g') ('r') ('greta')
)
