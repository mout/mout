import makeIterator from '../function/makeIterator_';

/**
 * Array map
 */
function map(arr, callback, thisObj?: any) {
    callback = makeIterator(callback, thisObj);
    const results = [];
    if (arr == null) {
        return results;
    }

    let i = -1;
    const len = arr.length;
    while (++i < len) {
        results[i] = callback(arr[i], i, arr);
    }

    return results;
}

export default map;
