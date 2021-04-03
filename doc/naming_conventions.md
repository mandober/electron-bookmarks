# Naming Conventions

In container-like classes that hold on to one value -- that value should be named `value`, that is, since private fields are available, `#value`

single value:
- base name: `_value` ~~or value~~
- field visibility: private
- name: __`#_value`__ ~~or #value~~
- getter: `value` or `Value`
- function as getter: `value()` or `getValue()` or `Value()`

Method names:
- static `of` (pure, unit)
- `map` (fmap, <$>)
- chain, bind (>>=), flatMap
- join
- ap, then (<*>)

Defined Methods:
- declarations (value field, constructor, value getter)
- toString()
- valueOf()
- eq, ne         :: a -> Bool
- lt, le, gt, ge :: (Eq a) => a -> Bool
- compare, cmp   :: a -> Ordering
