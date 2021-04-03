# Data.Aviary.Birds

Combinator birds as Haskell signatures.

## All birds

I :: a -> a
K :: a -> b -> a
B :: (b -> c) -> (a -> b) -> a -> c



## Data.Function combinators as birds

id :: a -> a
I combinator, Identity, idiot bird, `id`

const :: a -> b -> a
K combinator, Kestrel, true, `const`

(.) :: (b -> c) -> (a -> b) -> a -> c
B combinator, Bluebird, compose, `(.)`

flip :: (a -> b -> c) -> b -> a -> c
C combinator, cardinal, `flip`

applicator :: (a -> b) -> a -> b
A combinator, apply, applicator, Haskell `($)`, also called `I*` (i-star)

ψ :: (b -> b -> c) -> (a -> b) -> a -> a -> c
ψ combinator, `ψ`, psi, Haskell's `on`


## Other birds

becard :: (c -> d) -> (b -> c) -> (a -> b) -> a -> d
B3 combinator, becard

blackbird :: (c -> d) -> (a -> b -> c) -> a -> b -> d
B1 combinator, blackbird, specs oo

bluebird' :: (a -> c -> d) -> a -> (b -> c) -> b -> d
B' combinator, bluebird prime

bunting :: (d -> e) -> (a -> b -> c -> d) -> a -> b -> c -> e
B2 combinator, bunting, specs ooo

cardinal' :: (c -> a -> d) -> (b -> c) -> a -> b -> d
C' combinator

cardinalstar :: (a -> c -> b -> d) -> a -> b -> c -> d
C* combinator, cardinal once removed

cardinalstarstar :: (a -> b -> d -> c -> e) -> a -> b -> c -> d -> e
C** combinator, cardinal twice removed

dove :: (a -> c -> d) -> a -> (b -> c) -> b -> d
D combinator, dove

dickcissel :: (a -> b -> d -> e) -> a -> b -> (c -> d) -> c -> e
D1 combinator, dickcissel

dovekie :: (c -> d -> e) -> (a -> c) -> a -> (b -> d) -> b -> e
D2 combinator, dovekie

eagle :: (a -> d -> e) -> a -> (b -> c -> d) -> b -> c -> e
E combinator, eagle

eaglebald :: (e -> f -> g) -> (a -> b -> e) -> a -> b -> (c -> d -> f) -> c -> d -> g
E^, bald eagle (for alphabetical regularity it gets misnamed as eaglebald)

finch :: a -> b -> (b -> a -> c) -> c
F combinator, finch

finchstar :: (c -> b -> a -> d) -> a -> b -> c -> d
F* combinator, finch once removed.

finchstarstar :: (a -> d -> c -> b -> e) -> a -> b -> c -> d -> e
F** combinator, finch twice removed.

goldfinch :: (b -> c -> d) -> (a -> c) -> a -> b -> d
G combinator, goldfinch.

hummingbird :: (a -> b -> a -> c) -> a -> b -> c
H combinator - hummingbird.

idstar :: (a -> b) -> a -> b
I* combinator - identity bird once removed Alias of applicator, Haskell's ($).

idstarstar :: (a -> b -> c) -> a -> b -> c
I** combinator - identity bird twice removed

jalt :: (a -> c) -> a -> b -> c
Alternative J combinator - this is the J combintor of Joy, Rayward-Smith and Burton (see. Antoni Diller 'Compiling Functional Languages' page 104). It is not the J - jay combinator of the literature.

jalt' :: (a -> b -> d) -> a -> b -> c -> d
J' combinator - from Joy, Rayward-Smith and Burton. See the comment to jalt.

jay :: (a -> b -> b) -> a -> b -> a -> b
J combinator - jay.
This is the usual J combinator.

kite :: a -> b -> b
Ki - kite. Corresponds to the encoding of false in the lambda calculus.
owl :: ((a -> b) -> a) -> (a -> b) -> b

O combinator - owl.
phoenix :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d
(Big) Phi combinator - phoenix - Haskell liftM2.
This is the same function as starling'.

quacky :: a -> (a -> b) -> (b -> c) -> c
Q4 combinator - quacky bird.

queer :: (a -> b) -> (b -> c) -> a -> c
Q combinator - queer bird.
Haskell (##) in Peter Thiemann's Wash, reverse composition.

quirky :: (a -> b) -> a -> (b -> c) -> c
Q3 combinator - quirky bird.

quixotic :: (b -> c) -> a -> (a -> b) -> c
Q1 combinator - quixotic bird.

quizzical :: a -> (b -> c) -> (a -> b) -> c
Q2 combinator - quizzical bird.

robin :: a -> (b -> a -> c) -> b -> c
R combinator - robin.

robinstar :: (b -> c -> a -> d) -> a -> b -> c -> d
R* combinator - robin once removed.

robinstarstar :: (a -> c -> d -> b -> e) -> a -> b -> c -> d -> e
R** combinator - robin twice removed.

starling :: (a -> b -> c) -> (a -> b) -> a -> c
S combinator - starling.
Haskell: Applicative's (<*>) on functions.
Substitution.

starling' :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d
S' combinator - starling prime - Turner's big phi. 
Haskell: Applicative's liftA2 on functions (and similarly Monad's liftM2).
This is the same function as phoenix.

thrush :: a -> (a -> b) -> b
T combinator - thrush. 
Haskell (#) in Peter Thiemann's Wash, reverse application.

vireo :: a -> b -> (a -> b -> c) -> c
V combinator - vireo (pairing).

vireostar :: (b -> a -> b -> d) -> a -> b -> b -> d
V* combinator - vireo once removed.

vireostarstar :: (a -> c -> b -> c -> e) -> a -> b -> c -> c -> e
V** combinator - vireo twice removed.

warbler :: (a -> a -> b) -> a -> b
W combinator - warbler - elementary duplicator.

warbler1 :: a -> (a -> a -> b) -> b
W1 combinator - converse warbler. warbler with the arguments reversed.

warblerstar :: (a -> b -> b -> c) -> a -> b -> c
W* combinator - warbler once removed.

warblerstarstar :: (a -> b -> c -> c -> d) -> a -> b -> c -> d
W** combinator - warbler twice removed.
