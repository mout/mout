import makeIterator from '../function/makeIterator_';

/**
 * Array reject
 */
function reject(arr, callback, thisObj?: any) {
    callback = makeIterator(callback, thisObj);
    const results = [];
    if (arr == null) {
        return results;
    }

    let i = -1;
    const len = arr.length;
    let value;
    while (++i < len) {
        value = arr[i];
        if (!callback(value, i, arr)) {
            results.push(value);
        }
    }

    return results;
}

export default reject;
