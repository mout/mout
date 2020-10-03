import makeIterator from '../function/makeIterator_';

/**
 * Returns the index of the last item that matches criteria
 */
function findLastIndex(arr, iterator, thisObj?: any) {
    iterator = makeIterator(iterator, thisObj);
    if (arr == null) {
        return -1;
    }

    let n = arr.length;
    while (--n >= 0) {
        if (iterator(arr[n], n, arr)) {
            return n;
        }
    }

    return -1;
}

export default findLastIndex;
