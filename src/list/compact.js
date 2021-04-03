/*----------------------------------------------------------------------- ABOUT
| compact - Make array compact again
|
| A compact or holeless array, if also homogenuous and fix-sized, may enjoy the
| reputation of the fastest data structure like ever, as long as it manages to
| hold onto these attributes. Any hosting env will happily grant it the primo
| real-estate on the stack itself, reserved for flawless clientele only.
| Anything less then flawless triggers an insidious kick in the groin, swift
| exile to the heap, and the public humiliation; such structure will be
| permitted to the stack never more (fun fact!). Severe trauma fuels further
| deterioration evident in the fall out of its elements through holes that
| keep increasing in size but in quantity as well. It is said that the array
| is "sparse". It fears the reaper, no more.
|
| name:       compact
| desc:       Make a potentially sparse array compact
| runtime:    O(n)
|
└------------------------------------------------------------------------- ■ */

// --------------------------------------------------------------------- import
// import filter from './filter.js'
// import foldr from './foldr.js'
// import cons from './cons.js'


// ------------------------------------------------------------------------ api
const compact = xs => xs.filter(Boolean);

// --------------------------------------------------------------------- export
export default compact;

// ---------------------------------------------------------------------- check
/*
let a0 = [...Array(2), 0, +0, -0, NaN, ...Array(3), Infinity];
let a1 = Array(5); a1[6] = 66; a1[16] = 166;
let a2 = [0, 1, false, 2, '', 3];

console.log('\n',
    a1, '\n',
    'compact:', compact(a1), '\n',
    //filter(x => !!x, a1), '\n',

    compact(a0), '\n',
    compact(a1), '\n',
    compact(a2), '\n',

    a0.filter(Boolean), '\n',
    a1.filter(Boolean), '\n',
    a2.filter(Boolean), '\n',
)
*/
