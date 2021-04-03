// --------------------------------------------------------------------- import


// ----------------------------------------------------------------- definition
// reverse :: [a] -> [a]
const reverse = ([x, ...xs]) =>
    x === undefined
        ? []
        : [...reverse(xs), x]
;

/*
const everyFirst = ([x, y, ...xs]) =>
    x === undefined
        ? []
        : [x,...everyFirst(xs)]
;

const everySecond = ([x, y, ...xs]) =>
    x === undefined
        ? []
        : [y,...everySecond(xs)]
;

const partition = ([x, y, ...xs]) =>
    x === undefined
        ? []
        : [y,...everySecond(xs)]
;
*/


// --------------------------------------------------------------------- export
export default reverse


// ---------------------------------------------------------------------- check
/*
console.log(
    '\n',
    // reverse( [] ), '\n',
    // reverse( [3] ), '\n',
    // reverse( [3,4] ), '\n',
    // reverse( [3,4,5,6] ), '\n',
    // reverse( 'abcd' ), '\n',
    '\n',
    everyFirst( [1,2,3,4,5,6,7,8,9,10,11,12] ), '\n',
    everySecond( [1,2,3,4,5,6,7,8,9,10,11,12] ), '\n',

)
*/


// -------------------------------------------------------------------- haskell
/*

rev :: [a] -> [a]

-- identity: no change
canon     [] =  []
canon (x:xs) = x : canon(xs)

The nominal way is doing: x `cons` tail === x:xs
So, to rev a list, we'd have to rev these two (x:xs)
snoc === flip (:) === flip cons
cons x xs = x : xs
snoc xs x = x : xs

snoc x xs = (flip cons) x xs = xs : x

xs ++ [x]

-- reverse a list
rev     [] =  []
rev (x:xs) = rev(xs) ++ [x]

-- with snoc
reverse [] = []
reverse (x:xs) = snoc (rev xs) x

reverse :: List a -> List a
reverse Empty = Empty
reverse (Cons x xs) = snoc (rev xs) x


*/


// ------------------------------------------------------------------------ alt


/*
Considering a rec def of rev on arrays like above
the recursive case, #rec, is the "other variant"
    [...rev(xs), x]

and the "default variant" is 
    [x, ...rev(xs)]

which is the "identity" rec. case.
There is an implicit 'cons' op hidden,
explicitly denoted in Haskell it'd be
    x : rev(xs)



======================== v.1

reverse1 [] = []
reverse1 (x:xs) = reverse1 xs ++ [x]

// js
const reverse1 = ([x, ...xs]) =>
    x === undefined 
        ? [] 
        : [...reverse1(xs), x]

======================= v.2

reverse2 (x:xs) = rev' xs [x] where
                  rev' [] acc = acc
                  rev' (y:ys) acc = rev' ys (y:acc)


// js with a helper
reverse2 = ([x, ...xs]) => 
    x === undefined 
        ? [] 
        : rev2 (xs) ([x])

// helper
rev2 = ([x, ...xs]) => (acc = []) =>
    x === undefined
        ? acc
        : rev2 (xs) ([x, ...acc])


// pass fn
rev = foldr (\x xs  -> xs ++ [x])  []
rev = foldr ((x,xs) => [...xs,x]) ([])

// flip-cons
rev = foldl (flip (:))    []
rev = foldl (flip(cons)) ([])

// snoc
rev = foldl  snoc   []
rev = foldl (snoc) ([])


*/
