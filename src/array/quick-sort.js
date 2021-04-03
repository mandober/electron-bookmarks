/*
QuickSort (qs)

quicksort is a recursive divide-and-conquer algorithm.
DAC algorithms have the divide step and the recombine (conquer) step.
The former performs analysis by splitting the main problem into many smaller ones to which we apply solution, then the latter recombines the solutions together, synthesizing the solution to the main problem.

In mergesort, the divide step does hardly anything, while in qs hardly anything does...ahm, In qs the bulk part of the work is in the divide step, while the combine step does little, which is quite the opposite to mergesort.

QUICKSORT has
- in place sorting (mutation)
- worst-case as bad as selection and insertion sort: Θ(n^2)
- average-case as good as MERGESORT: Θ(nlog^2 n)

However, in practice quicksort outperforms merge sort, and it significantly outperforms SELECTION SORT and INSERTION SORT.

QUICKSORT strategy:
Sort a subarray [p..r], initially [0..n-1]


1. Divide by picking a pivot element
   (randomly, or 1st, or the middle one, or...just do it)

a. PARTITIONING
  - place to the pivot's (element <= pivot) ? left : right side
    [lo <= pivot < hi]

    For example:
       sub = [9,7,5,11,12,2,14,3,10,6]
                                    ↑
       Set the last element as the PIVOT.
       Post partitioning, we get:
                    ↓
       sub = [5,2,3,6,12,7,14,9,10,11]

b. Let q be the index of where the pivot ends up.

2. Conquer by recursively sorting the subarrays
   array[p..q-1] and array[q+1..r]


```haskell
quicksort :: Ord a => [a] -> [a]
quicksort []     = []
quicksort (x:xs) = quicksort [a | a <- xs, a <= x]
                   ++ [x] ++
                   quicksort [a | a <- xs, a >  x]
```

*/


function quickSort(arr, lo, hi) {
    if (lo === undefined) lo = 0;
    if (hi === undefined) hi = arr.length - 1;

    if (lo < hi) {
        // partition the array
        var p = partition(arr, lo, hi);
        console.log('partition from, ' + lo + ' to ' + hi + ' => partition: ' + p);
        // sort subarrays
        quickSort(arr, lo, p - 1);
        quickSort(arr, p + 1, hi);
    }

    // for initial call, return a sorted array
    if (hi - lo === arr.length - 1) return arr;
}


function partition(arr, lo, hi) {
    // choose last element as pivot
    var pivot = arr[hi];

    // keep track of index to put pivot at
    var pivotLocation = lo;

    // loop through subarray and if element <= pivot, place element before pivot
    for (var i = lo; i < hi; i++) {
        if (arr[i] <= pivot) swap(arr, pivotLocation++, i);
    }

    swap(arr, pivotLocation, hi);
    return pivotLocation;
}

function swap(arr, index1, index2) {
    if (index1 === index2) return;
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    console.log('swapped', arr[index1], arr[index2], 'in', arr);
    // console.log('swapped ' + arr[index1] + ' ' + arr[index2] + ' in ' + arr);
    return arr;
}

quickSort([1, 4, 3, 56, 9, 8, 7, 5]);

console.log('algo');
console.log('go');
console.log('quicksort','\n','sorting','sort','sorting');
console.log('lgo');
