/*
parsing-library

https://medium.com/@JosephJnk/building-a-functional-parsing-library-in-javascript-and-flow-7d738088237f

define the input to our parsers as so:
    type Char = string
    type ParseInput = Array<Char>

the type returned by our parsers:
    type ParseResult<R> = Array<[R, ParseInput]>

Because our parsers will be capable of parsing values of any type, we represent the type of their final result with the generic R. Each of these results is paired with the unparsed remainder of the string in question. In the case where a parse fails, we'll return an empty array. Now we can see the full type definition for a parser:
    type Parser<R> = Array<Char> => ParseResult<R>

A parser for things is a function from strings 
to lists of pairs of things and strings.


// Helper for constructing a successful parse result:
function success<R>(result: R, input: ParseInput) : ParseResult<R> {
    return [[result, input]];
}

the outer array here is a proper array, 
but the inner one is being used as a tuple. 

// Helper for constructing an always-fail parse result:
function fail<R>(input: ParseInput) : ParseResult<R> {
    return [];
}

No matter what input this parser receives, it returns an empty list.
Using these two, we can produce a factory for slightly more useful parsers.

function satisfy<R>(test: Char => boolean) : Parser<R> {
  return (input: ParseInput) =>
        input.length === 0
            ? fail(input)
            : test(input[0])
                ? success(input[0], input.slice(1))
                : fail(input)
}

satisfy takes a predicate and produces a parser that consumes a character and succeeds if the predicate holds, otherwise fails.

We can use satisfy to define the interface for parsing any single given char
function character(c: Char) : Parser<Char> {
    return satisfy(x => x === c);
}


Combining parsers
=================

Now that we can create basic parsers for single chars,
make a function that sequences one parser after the other:

function flatMap<A, B>(arr: Array<A>, fn: A => Array<B>) : Array<B> {
    return arr.reduce((arr, x) => arr.concat(fn(x)), []);
}

function then<R, S>(first: Parser<R>, second: Parser<S>) : Parser<[R, S]> {
  return input =>
    flatMap(
      first(input),
      ([r, remainder]) =>
        second(remainder).map(
          ([s, secondRemainder]) => [[r, s], secondRemainder]));
}


flatMap :: (Array<A>, A => Array<B>) => Array<B>
maps an array into an array of arrays, then flattens them

We call it on first(result), mapping over the results of our first parser.
Each entry in this array of results is a pair of
the result of the first parser (r)
and the unconsumed input from the first parser (remainder)

Now we do second(remainder) to get an array of results from the second parser.
These results are pairs of
the result of the second parser (s)
and the unparsed input left over from the second parser (secondRemainder)

So we have actually parsed an r followed by an s
so we map over this array of results
to return the pair [r, s] as the parsed result.

The dual of the sequencing parser is the alternating combinator
corresponding to the OR operator (| in BNF notation).
It returns the results of parsing with the first parser
concatenated with the results of the second parser:

function alt<R>(left: Parser<R>, right: Parser<R>) : Parser<R> {
    return input => left(input).concat(right(input));
}



In theory, using then for sequential items and alt for alternatives is all that we need to implement parsers for BNF grammars. Unfortunately the type signatures we’re working with will not allow this quite yet. Consider this grammar, for a 1 surrounded by any number of balanced pairs of parenthesis:

parenOne ::= "(" parenOne ")" | "1"

We would want to express this in our combinators by doing something like this:

const parenOne = alt(
    then(character("("), then(parenOne, character(")"))),
    character("1"));

Problem is, alt requires that each of the parsers its given have the same return type, and we can see here that our first alternative’s return type will involve nested tuples, while our second will return a string. We need to make a few more tools for manipulating our parsers

Additional combinators
======================

Let’s make a combinator that will let us transform the results of a parser. This way we can transform the types of our alternatives until they match:

export function map<A, B>(fn: A => B, p: Parser<A>) : Parser<B> {
  return input =>
    p(input).map(([result, remaining]) => [fn(result), remaining]);
}

All we need to do here is apply our given function to each return value of the parser.

Let’s define a cleaner type for the return value of our parse:

class ParenPair {
  contents: ParenPair | One;
  constructor(contents: ParenPair | One) {
    this.contents = contents;
  }
}

class One {};

We have one more hurdle to hop over, here. Recall the definition of parenOne that we gave earlier:

const parenOne = alt(
  then(character("("), then(parenOne, character(")"))),
  character("1"));

Ignoring the type issues, the definition of parenOne is recursive. We can’t pass parenOne to then until after parenOne is defined, but we need to do so as part of parenOne's definition. We can deal with this by making a lazy version of then:

function lazyThen<R, S>(first: () => Parser<R>,
                        second: () => Parser<S>) : Parser<[R, S]> {
  return input => then(first(), second())(input);
}

All this does is wrap then, such that rather than taking two parsers, we take two functions which return parsers. We don’t execute these functions until we actually need them to return the parse, so it’s fine to create them before these parsers are ready to use. (that is, we can create a function which references parenOne during parenOne's definition, as long as this function isn’t actually called until the definition is complete.) alt can be wrapped in the same way, producing lazyAlt.

Now that these extra concerns are accounted for, we can finally implement a parser for our parenOne grammar:

const parenOne : Parser<ParenPair | One> =
  alt(
    map(
      ([openParen, [contents, closeParen]]) =>
        new ParenPair(contents),
      then(character("("),
           lazyThen(() => parenOne, () => character(")")))),
    map(
      _ => new One(),
      character("1")));

Let’s run this parser on "((1))".split("") and see what it produces:
[ [ ParenPair { contents: ParenPair { contents: One {} } }, [] ] ]
It works! We have one result: the case where two ParenPairs are parsed surrounding a One, leaving an empty array as the remaining input. Note that we achieved one of the goals which lead to us using combinator parsers: we have type signatures on our parser, telling us that if a parse succeeds, the parse data will be of a known type.


Higher-level combinators
========================
We now have the functions necessary to translate grammars from BNF into working parsers: replace | with alt or lazyAlt, replace successive terms with nested calls to then or lazyThen, and use map to turn the raw parser output into a nicely usable form. We can do better than this, though. In the above example, we represented our grammar as a sequence of parenthesis, parenPairs, and 1, but it’s much more elegant to think of this as a 1 surrounded on either side by pairs of parenthesis. Let’s implement a function to bracket a parser with any number of pairs of two others, using only the combinators which we’ve already declared:

function bracket<R, S, T>(left: Parser<R>,
                          middle: Parser<S>,
                          right: Parser<T>) :
                              Parser<[Array<[R, T]>, S]> {
  return input =>
    alt(
      map(
        m => [[], m],
        middle),
      map(
        ([l, [[lrs, m], r]]) => [[[l, r]].concat(lrs), m],
        then(left,
             then(bracket(left, middle, right), right))))(input);
}

The return type of a parser produced by bracket is [Array<[R, T]>, S], where R and T are the types of the parsers wrapping either side, and S is the type returned by the parser being wrapped. While the transformations in the map calls may seem daunting, the core logic of this parser is quite simple: it returns an alternative of the wrapped middle value, or the left value, followed by a recursive call to bracket, followed by the right value.
Now we can rewrite our parenOne function more naturally, without the need for self-reference, laziness, or new types:

const parenOneBracketed =
  bracket(character("("), character("1"), character(")"));


  If we want to produce the same output as before, we can still map this with our additional types:

const parenOneBracketed =
  map(
    (parens, one) =>
      parens.reduce((acc, _) => new ParenPair(acc), new One()),
    bracket(character("("), character("1"), character(")")));


This is a substantial improvement, and demonstrates another of our motivations for using a combinator library: because we had the power of a full language at our fingertips, we were able to easily create a new parsing abstraction, that can be reused and composed just as readily as our base abstractions.


To round out our parsing library, let’s add a couple more functions for standard parsing cases: parsing a value repeated some number of times. First, let’s handle the case where a parser is match zero or more times, as with the symbol * in regular expressions:


function many<R>(p: Parser<R>) : Parser<Array<R>> {
  return alt(
    map(
      ([r, rs]) => [r].concat(rs),
      then(p, input => many(p)(input))),
    input => success([], input));
}


The item we parse is of type R, so we create a parser with the return type Array<R>. We can use many to similarly implement a function for when a parser should be matched one or more times, as with the regular expression operator +:

function some<R>(p: Parser<R>) : Parser<Array<R>> {
  return map(
    ([r, rs]) => [r].concat(rs),
    then(p, input => many(p)(input)));
}


More useful functions may be defined. Here are the type signatures of few that are commonly useful:


// Eat any amount of whitespace, returning nothing
whitespace : Parser<null>;
// Parse a sequence of items separated by some junk,
// like a "," - separated list
separatedBy : (Parser<R>, Parser<S>) => Parser<Array<R>>;

// Parse a sequence of items separated by some important thing
separatedByImportant :
  (Parser<R>, Parser<S>) => Parser<[R, Array<[S, R]>]>


Implementations of these are omitted for succinctness, and to provide a suggested challenge for those looking to try their hand at defining combinators themselves.

Note that each of these high-level combinators still have the Parser type as both their arguments and their return values. This allows us to continue composing parsers at higher and higher levels of abstraction; there’s no reason that the parser we pass to bracketed can’t be one created by many, that those we pass to separatedBy can’t be produced by bracketed, etc.

The library we’ve implemented here has some serious limitations: it is not capable of parsing context-sensitive grammars, does not provide any mechanism for reporting errors when parses fail, and is far from efficient, in either memory usage or runtime. These are due to the choice of an implementation which favors clarity and succinctness over all else, and are not present in industrial-strength parser combinator libraries such as parsimmon. This said, we’ve implemented a flexible, expressive, type-safe library in around 10 functions and under 100 lines, capable of parsing any context-free language. This is no mean feat, and shows the power that comes with choosing combinators as the basic abstraction for library construction.


All code samples from this post are available here:
https://github.com/JosephJNK/medium-post-sample-code/tree/master/introducing-parser-combinators


https://github.com/jneen/parsimmon


*/

const success = (result, input) => [[result, input]];

const fail = _ => [];

const satisfy = p => input =>
    input.length === 0
        ? fail(input)
        : p(input[0])
            ? success(input[0], input.slice(1))
            : fail(input) // no match
;

// using satisfy to define the interface for parsing any single given char
const char = c => satisfy(x => x === c);

// function that runs 2 parsers in a sequence (one, then the other):
const then = (first, second) => input =>
    first(input).flatMap(
        ([a, as]) => second(as)
            .map(([b, bs]) => [[a, b], bs])
    )
;

// alternating parser
const alt = left => right => input => left(input).concat(right(input));



// basic parser that parses a given char
const parseABCD = satisfy(x => ["a","b","c","d"].includes(x));

console.log('\n',
    parseABCD("asdf".split('')),'\n',    // returns [['a', ['s', 'd', 'f']]]
    parseABCD([]),              '\n',    // returns []
    parseABCD(["Z"]),           '\n',    // returns []
    parseABCD("back".split('')),'\n',
    parseABCD("abcd".split('')),'\n',
)
