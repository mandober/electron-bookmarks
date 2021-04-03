// interpol - interpolation search

// For searching for an element in a numeric, sorted, discontiguous array

const interpol = x => xs => {
    let lo  = 0;                 // head   0
    let mid = -1;                // mid   -1
    let hi  = xs.length-1;       // last  10
    let n = 0;

    while (n < 3) {
        if (lo === hi || xs[lo] === xs[hi])
            return `Target ${x} not found.`;

        mid = lo + ((hi - lo) / (xs[hi] - xs[lo])) * (x - xs[lo]);
        mid = Math.ceil(mid)

        //    0  + ((10 - 0)  / (20     - 10    )) * (14 - 10   )
        //           10       / 10               ) *  4       =1*4=4

        console.log(`>>> mid: ${mid}`);
        console.log(`xs[mid]: ${xs[mid]}`);

        if (xs[mid] === x) return `Target ${x} found at index ${mid}`;

        if (xs[mid] < x) lo = mid+1;
        console.log(`lo: ${lo}`);

        if (xs[mid] > x) hi = mid-1;
        console.log(`hi: ${hi}`);

        ++n;
    }
}

console.log(
  '\n',
  interpol (7) ([2,4,6,7,8,13,14,22,25,27,31,36,39,42,47,53,57]), '\n',
//   interpol (41) ([10,12,13,16,17,19,20,22,30,35,41,49,52,59,63]), '\n',
)
