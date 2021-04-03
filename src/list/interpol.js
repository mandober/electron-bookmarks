/*----------------------------------------------------------------------- ABOUT
interpol - interpolation search

name        interpol
brief       Array search
complexity  O(1)

Interpolated method for array searching.
returns the index of the supplied value, if it exists in the array.
If a match exists, it can find it in 2 steps.
Only works with arrays that are:
- arrays of integers
- sorted

-----------------------------------------------------------------------------*/

function interpol(x, xs) {
    let lo  = 0;                 // head   0
    let mid = -1;                // mid   -1
    let hi  = xs.length-1;       // last  10
    let n = 0;
    while (n < 3) {
        if (lo === hi || xs[lo] === xs[hi])
            return `Target ${x} not found.`;
        mid = lo + ((hi - lo) / (xs[hi] - xs[lo])) * (x - xs[lo]);
        mid = Math.ceil(mid)
        if (xs[mid] === x) return `Target ${x} found at index ${mid}`;
        if (xs[mid] < x) lo = mid+1;
        if (xs[mid] > x) hi = mid-1;
    }
}

// ---------------------------------------------------------------------- check
console.log(
  '\n',
  interpol (7) ([2,4,6,7,8,13,14,22,25,27,31,36,39,42,47,53,57]), '\n',
//   interpol (41) ([10,12,13,16,17,19,20,22,30,35,41,49,52,59,63]), '\n',
)
