# Tuples

No tuples in JS. Tuples kinda exist (as fn params and fn call list) but these are not first-class.


(quiz solutions[^⑴])

```js
// JS your quick quiz test 

function f(a, b, c, ...zs) {
    return [a+b+c, zs, Array.from(arguments)];
}

const r1 = f;
const r2 = f();
const r3 = f(());

const r5 = f((_));
const r6 = JSON.stringify(r5);
const r7 = r5.toString();

const r10 = f((1,2,3));
const r11 = f(1,2,(3));
const r15 = f(1,2,(3,4),5);
const r16 = f(1,2,(3,4),5,6);

/*
1: [Function: f]
2: [ NaN, [], [] ]
3: SyntaxError: Unexpected token ')'

5:
*/
[
    'NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined,,NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined',
  [],
  [
    [
      'NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined',
      [],
      [Array] // meh, most output is hidden within
    ]
  ]
]


// 5: JSON.stringify(r5, null, 2)
'[\n' +
  '  "NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined,,NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined,,NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined,,NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined",\n' +
  '  [],\n' +
  '  [\n' +
  '    [\n' +
  '      "NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined,,NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined",\n' +
  '      [],\n' +
  '      [\n' +
  '        [\n' +
  '          "NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined",\n' +
  '          [],\n' +
  '          [\n' +
  '            [\n' +
  '              "NaN,,NaN,,undefined",\n' +
  '              [],\n' +
  '              [\n' +
  '                [\n' +
  '                  null,\n' +
  '                  [],\n' +
  '                  []\n' +
  '                ],\n' +
  '                [\n' +
  '                  null,\n' +
  '                  [],\n' +
  '                  []\n' +
  '                ]\n' +
  '              ]\n' +
  '            ]\n' +
  '          ]\n' +
  '        ]\n' +
  '      ]\n' +
  '    ]\n' +
  '  ]\n' +
  ']'


// r5.toString()
'NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined,,NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined,,NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined,,NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined,,NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined,,NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined,,NaN,,NaN,,undefined,,NaN,,,NaN,,undefinedundefined,,NaN,,NaN,,undefined,,NaN,,,NaN,,'
```



In fact, although there is no passing of tuples around, a function call does look almost fitting. That case is one of two cases when tuples make their appearance in JS, the other being in a function header, as a parameter list. The term "list" seems to be preferred to a tuple, used more often in JS specs and docs, but it means the same, or at least simlar, thing. Any list with a known length `n` may be considered an `n`-tuple.

However, in both cases, no tuple is actually supplied or accepted; a function call site has what looks like a tuple, and it might as well be considered one, but it is more of an annotation then anything else. And technically, calling a function with a tuple would feature double parenthesis - outer denoting a function invocation and inner denoting a tuple.


consists of a function identifier followed by a pair of parenthesis, which denote that the function mentioned is to be invoked, rather then referenced.


```js
f;             // unbound good-for-nothing function reference
"a"            // unbound good-for-nothing(*) literal (-ly the same as f above)
f();           // unbound no-good-if-f-is-pure function invocation
const g = f;   // bound function reference
const h = g(); // bound function invocation, i.e. the return value is bound

// (*) except as a declaration mechanism (e.g. "strict mode")

// function definition has a list of params i.e. a tuple (here, 2-tuple)
function f(x,y) { /* ... */ }

// function call site has a list of args i.e. a tuple (here, 3-tuple)
const _ = f(a,b,c)


// calling f with a list of 3 args works as expected
const _ = f(a,b,c)
//> 9

// but calling f with a 3-tuple returns a NaN
const _ = f((a,b,c))
//> NaN

// resambles an array arg
const _ = f([a,b,c])


function t3(a,b,c,...zs) {
    return [a+b+c, ...zs, ...Array.from(arguments)];
}

t3()
t3(())
t3((1))
t3((1, 2))
```



```js
// naively trying to bound a 3-tuple
const tup = (1,2,3)
// evaluating `tup` revels is actually a sneaky comma operator at play

tup; // 3
```



[^⑴]: 1. `NaN`    2. `SyntaxError: Unexpected token ')'`    3. r
