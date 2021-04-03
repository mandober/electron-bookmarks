# Modules


Prelude is a module that contains nothing of its own.
Maybe it has some meta data like info about version, help...

Prelude module is the top level namespace for this library.

but it also contains all other modules as submodules.

Prelude main module
Prelude submodules:
- fun, functionals, decorators
- iterables (primarily arrays, then String, Map, Set)
- lst
- str
- num
- combinators
- predicates
- contracts


## Sampling the import possibilities

```js
import Prelude from 'Prelude'
import * as P from 'Prelude'
import { Fun, Str } from 'Prelude'
import { foldr, foldl } from 'Prelude'

// fully-qualified
let m1 = Prelude.iterables.foldr(...)

// directly off Prelude, skipping iterables namespace/object
let m1 = Prelude.foldr(...)
```

---

- Main object: `fpj`
- Section carriers:
  - functionals  : f    fn      functions,                          ufun
  - array utils  : a    arr     arrays                              uarr
  - string utils : s    str     strings                             ustr
  - list utils   : l    lst     lists (array/string)                ulst
  - number utils : n    num     numbers | math | arithmetic         unum
  - various utils: v    var     var| misc                           uvar
  * contracts    : c    con     contracts (predicates ⊆ contracts)  ucon
  * runtimechk   : r    rtc     runtime contracts to check HM-style sigs
  * predicates   : p    pre     predicates
  * assertions   : e    ass     assert

* fpj         - top wrapper
* prelude     - common            utils
* f           - functional        utils
* l           - array/list/string utils
* p           - predicates


```js
import fpj from 'fpj'

fpj.prelude.f.curry
fpj.prelude.curry
fpj.curry

import {* as p} from 'prelude'


u.con.is_number
u.con.is_suffix_of
u.lst.
u.fun.curry
u.var.info
u.num.fac
u.str.toCap   
u.str.toSlug
```

into    | from
intoNat | fromNat
intoStr | fromStr

$Str === $String === $isString === $assertIsString

$String, $Str
$Number, $Num
$Boolean, $Bool
$Function, $Fn
$
$
