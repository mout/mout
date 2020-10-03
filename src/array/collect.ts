import append from './append';
import makeIterator from '../function/makeIterator_';

/**
 * Maps the items in the array and concatenates the result arrays.
 */
function collect(arr, callback, thisObj?: any) {
    callback = makeIterator(callback, thisObj);
    const results = [];
    if (arr == null) {
        return results;
    }

    let i = -1;
    const len = arr.length;
    while (++i < len) {
        const value = callback(arr[i], i, arr);
        if (value != null) {
            append(results, value);
        }
    }

    return results;
}

export default collect;
