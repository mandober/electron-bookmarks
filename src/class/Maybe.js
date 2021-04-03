import {Identity, map} from './Identity.js'

class Maybe extends Identity
{
    // toString :: f a ~> String
    toString = () => `Maybe(${this.Value})`;

    //static get Nothing() {
    //    return this.Value === []
    //}

    //static Just = x => new Maybe(x);
}
// ----------------------------------------------------------------------- Just
class Just extends Maybe
{
    // toString :: f a ~> String
    toString = () => `Maybe::Just(${this.Value})`

    // map :: Maybe a ~> (a -> b) -> Maybe b
    map = f => new Just(f(x))
}


// -------------------------------------------------------------------- Nothing
class Nothing extends Maybe
{
    // toString :: f a ~> String
    toString = () => `Maybe::Nothing(${this.Value})`

    // map :: Maybe a ~> (a -> b) -> Maybe b
    map = f => undefined
}




// ---------------------------------------------------------------------- check
let mx = Just.of(142)
let my = Nothing.of()

const safeHead = ([x, ...xs]) =>
    x === undefined
        ? Just.of(x)
        : Nothing.of()


console.log('\n',
    mx.toString(), '\n',
    mx.Value, '\n',
    '[map]', mx[map](x => x + 10).Value, '\n',
    '[map]', my[map](x => x + 10).Value, '\n',
)
