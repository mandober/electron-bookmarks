const contracts = x => typeof x;
contracts.of    = x => typeof x;
contracts.str   = x => Object.prototype.toString.call(x)

export default contracts;

console.log('\n',
    contracts(x => x+3)              , '\n',
    contracts.str(x => x+3)          , '\n',

    contracts.of(async x => x+3)     , '\n',
    contracts.str(async x => x+3)    , '\n',
)
