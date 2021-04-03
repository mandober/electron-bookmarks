// Ordering type = { LT, EQ, GT }
const Ordering = {
    LT: -1,
    EQ:  0,
    GT:  1,
}

const compare = a => b =>
    a < b 
        ? Ordering.LT
        : a === b 
            ? Ordering.EQ
            : Ordering.GT
;
