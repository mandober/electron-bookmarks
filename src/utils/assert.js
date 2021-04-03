// assert :: (a -> Either ⊥ a) -> a -> Either ⊥ a
const assert = contract => exp =>
    contract(exp) ? exp : die('horribly')
;


/*

const f = x => {
    assert(x, Number)
    // if true, go on
    // if false, die screaming
    // ...
}

*/
