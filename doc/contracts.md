# Contracts

Contracts "subsystem" is a type system guard. It makes sure that values have the expected appropriate type.

In general, contracts are about the conditions that must be upheld. They bring to focus the invariants so that things are provably correct and not just assumed to be so. The constraints are verified to be correct so they can be relied upon.

Whenever a contract is broken, the execution halts and complains loudly about the perpetrator. That is, a program should *fail hard*, making it obvious what the problem was, as opposed to failing gracefully or not at all by, e.g., coercing a value silently. JS is not only a dynamic language but a too tolerable one that doesn't punish sloppy code (strict mode improves things) as much as it should, making it easy for bugs to slip through.

The contracts should not be just simple type checkers but provide a way to define very granular constraints, for example, a contract that makes sure the supplied argument is not only a function but an injective one.

The action with the contracts takes place primarily inside functions, when an argument is first used - this is prime opportunity to make sure it hold its part of the contract (as for the implementation, it would be best to decorate it if possible then to explicitly pass it to a contract-checker). The return value should be contract-checked as well (or is that a job for the client?).

Here, the contracts are realized through a bunch of type-checking functions, starting with the most basic, primitive-type checks. Now, every primitive type has a corresponding function whose name is the same as the official name of that type but with prefixed `$`.

Names:
- contract-checker fn named as ${type}, e.g. $String
- if incorrect type, call `die` passing a `String` for expected type and `received` which is the received unexpected value.
- `die` should pretty print the message incl. what's expected vs received


1. Boolean Bool bool $Bool (default: `false`)

new Boolean() // false
