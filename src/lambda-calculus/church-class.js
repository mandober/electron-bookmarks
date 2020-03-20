/*
Church

- Booleans
- Numbers

*/

class Church
{
    Id = a => a;
    True = a => _ => a;
    False = _ => b => b;
}


class ChurchBoolean extends Church
{
    constructor(b) {
        super()
        this.bln = b
    }
}


class ChurchInteger extends Church
{
    chInt = this.Zero;

    static of(n) {
        return new ChurchInteger(n);
    }

    constructor(n) {
        super()
        this.chInt = this.church(n)
    }


    Zero = _ => b => b;
    Succ = n => f => x => f (n (f) (x) );

    S = f => x => f (this.chInt (f) (x) );

    church = n =>
        n === 0
            ? this.Zero
            : this.Succ(this.church(n - 1))
    ;

    unchurch = c => c(x => x + 1)(0);

    toString() {
        return this.inspect()
    }

    inspect() {
        return `${this.unchurch(this.chInt)}`;
    }
}



// ==========================================================================
let ci = ChurchInteger.of(2);

console.log(
    '\n',
    ci.inspect(),
    '\n',
    // "" + ci,
    '\n',
    ci.inspect(ci.Succ()),
    '\n',
    // "" + ci.S(),
    // '\n',

)



// ==========================================================================


export default Church
