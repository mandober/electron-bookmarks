/*
Parser Combinators

Start with a function that reads the first character from a raw input.
If it reads an "a", return it and advance the input by one.
Otherwise, returns an error and skip advancing the input.

To read a specific char, create a new function which takes this character and returns the function that reads it (like the one you had previously only adapted for this specific character). This function you call `lit`.

-- Parser :: (String -> [(a, String)]) -> Parser a
-- parse  :: Parser a -> String -> [(a, String)]


*/
const raw = 'abcde fgh 123.'

const init = str => str[Symbol.iterator]()

const read = it =>
() => {
    let itobj = it.next()
    // { value: 'a', done: false }
    return itobj.done ? undefined : itobj.value
}

const readone = rawstr => read(init(rawstr))


const advance = (..._) => console.log('advancing...')


const failure = msg => (function () { throw new Error(msg) })


const lit = ch => input =>
    readone(input)() === ch
        ? (advance(input, 1), ch)
        : failure(`Cannot read character ${ch}`)
;

console.log(
    lit('a')(raw),
    lit('a')(raw),
)
