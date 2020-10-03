import makeIterator from '../function/makeIterator_';

/**
 * Returns the index of the first item that matches criteria
 */
function findIndex(arr, iterator, thisObj?: any) {
    iterator = makeIterator(iterator, thisObj);
    if (arr == null) {
        return -1;
    }

    let i = -1;
    const len = arr.length;
    while (++i < len) {
        if (iterator(arr[i], i, arr)) {
            return i;
        }
    }

    return -1;
}

export default findIndex;
