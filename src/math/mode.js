const mode = ([...ys]) => {
    const xs = ys.sort();
    const len = xs.length;
    console.log(len);

    const parity = len % 2 !== 0 ? 'odd' : 'even';

    console.log(parity);

    switch (parity) {
        // odd
        case 'odd':
            console.log(parity);

            let idx = (len+1) / 2;
            console.log(idx);

            let el = xs[2];
            console.log(el);

            return el;
        // even
        case 'even':
            console.log(parity);
            return ( xs[(len-1)/2] + xs[(len+1)/2] ) / 2;
    }
}


let a1 = [1, 1, 3, 5, 6, 8, 12] 

let odd2 = [6, 1, 8, 3, 5, 1, 12] 

let even = [1, 1, 3, 5, 6, 8, 12, 12] 

console.log(
    '\n',
    mode(a1),
    '\n',
    // mode(odd2),
    '\n',
    // mode(even),

)


/*


[1, 1, 3, 5, 6, 8, 12, 12]   n=8
          ↑  ↑
          5+ 6 = 11 / 2 = 5.5

 0  1  2  3  4  5   6   7 
          ↑
[1, 1, 3, 5, 6, 8, 12]      n = 7

if len = even:
    (n + 1) / 2

if len = odd:
    (n - 1) / 2





*/
