import makeIterator from '../function/makeIterator_';

/**
 * Array every
 */
function every(arr, callback, thisObj?: any) {
    callback = makeIterator(callback, thisObj);
    let result = true;
    if (arr == null) {
        return result;
    }

    let i = -1;
    const len = arr.length;
    while (++i < len) {
        // we iterate over sparse items since there is no way to make it
        // work properly on IE 7-8. see #64
        if (!callback(arr[i], i, arr)) {
            result = false;
            break;
        }
    }

    return result;
}

export default every;
