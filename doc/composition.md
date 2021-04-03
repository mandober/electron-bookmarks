# Composition

Composition of two functions, `g` and `f`, means feeding the output of `f` as the input to `g`, kind of like the human centipede.

             f:x -> y      g:y -> z
(in)  x ==> `f` ==> y ==> `g` ==> z  (out)

Actually, this diagram shows *piping* which has a more natural flow, from left to right, unlike *composition*, which flows right to left:

              g:y -> z      f:x -> y
(out)  z <== `g` <== y <== `f` <== x  (in)

Composition of g and f is denoted by `g ∘ f` and defined as `g(f(x))`.

Composing functions grants you the ability to talk exclusively about functions themselves, without having to mention the arguments.

The succinct `g ∘ f` becomes `g ∘ f [x]` if we mention the arg(s) (where `[x]` possibly represents one or more args, to `f`).

Being able to skip the data (i.e. the args) cleans up a presentation considerably, allowing us to focus on some other important aspects of function composition (the data is bound to come, sooner or later, but having no influence on our actual demonstration, we might as well skip it for now). It's quite related to the point-free style.

After all, how can we even mention the data anyway. The right-most function might accept one, two, none, or any number of args, possibly all having a different type, and this is hard to abstract - we can't just parametrize both the number of args and their type (that being said, god knows if `[x]` above is actually correct :).




Invariants that need satisfaction in order to do function composition.
The first impression might be that composition 

compose is that
the LSF can be n-ary (expecting n args): (...args)
but the other fns, although can be n-ary (with n > 1),
inside compose they are treated as unary -- because
a fn "before" can only return a single value.
so a fn "after" can have that value as its 1st arg
and wait for other args from someplace else, outside compose.

Composing a Binary and an Unary Functions

The composition of two functions is denoted as (g ∘ f) and
the function that results from this then expects the args.

Usually, the rightmost function, here `f`, can have any arity - it
will take as many args it needs and produce a single value (just like
any other function - they can all return but a single value).

This would imply that the next function in composition, here `g` needs
to be a unary function - it just takes the result that f returns, right?
Wrong! Actually, `g` can be a poliadic function as well!

For example, if `f` is a unary function that takes an arg `x`
and `g` is a binary function that takes two args `a` and `b`
then their composition as g ∘ f might seem strange.

If `g` was a binary fn as well, their composition might even have the
usually notation as g ∘ f (x) where `x` is the f's (only) arg; this
implies that `g` is a unary fn as well, accepting the sole arg, `f(x)`.

However, with `g` being a binary function, the denotation g ∘ f (x)
does not cut it (I'm not sure what the appropriate notation is, maybe:
g (a,b) . f (x) ?).

So, the intereseting part here is that `g` can be in fact more then a unary, 
it can be a polyadic fn (here binary), that wil just fix what it receives from `f` asits first arg. Then, `g` will wait for its second arg wherever it may come from.

The familiar use case of this, binary and unary, composition is the definition of map in terms of foldr:

map f = foldr ((:) . f) []

where we have the binary fn `cons`, (:), and the unary fn, f = (\x -> x + 3).
f will be applied to the current list element, producing f(x), which
the cons will take and fix as its 1st arg, still wating for the socond.
The 2nd arg to cons will be the init value, z, which in this case is starts as [] and this means that f will be applied to the current element the result of which will be prepended to the accumulator. acc starts as [] then it is [fx1] then [fx1, fx2], etc.

(:)     . f
(:) a z . f x
a:z     . f x
(a:z) (f) (x)
a:z (f x)
a:z fx
fx:z
fx : z (waiting for arg z)

~ ~ ~

f¹ :: a -> a
g² :: a -> a -> a
g² . f¹

g²       . f¹
g² (a b) . f¹ (x) === g² (f¹ x) b

~ ~ ~

compose(g², f¹) ~~> g² (f¹(x)) (b)
