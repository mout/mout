/**
 * Merge sort (http://en.wikipedia.org/wiki/Merge_sort)
 */
function mergeSort(arr, compareFn) {
    if (arr == null) {
        return [];
    } else if (arr.length < 2) {
        return arr;
    }

    if (compareFn == null) {
        compareFn = defaultCompare;
    }

    const mid = ~~(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid), compareFn);
    const right = mergeSort(arr.slice(mid, arr.length), compareFn);

    return merge(left, right, compareFn);
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

function merge(left, right, compareFn) {
    const result = [];

    while (left.length && right.length) {
        if (compareFn(left[0], right[0]) <= 0) {
            // if 0 it should preserve same order (stable)
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    if (left.length) {
        result.push(...left);
    }

    if (right.length) {
        result.push(...right);
    }

    return result;
}

export default mergeSort;
