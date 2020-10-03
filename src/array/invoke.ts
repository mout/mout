import slice from './slice';

/**
 * Call `methodName` on each item of the array passing custom arguments if
 * needed.
 */
function invoke(arr, methodName, varArgs) {
    if (arr == null) {
        return arr;
    }

    const args = slice(arguments, 2);
    let i = -1;
    const len = arr.length;
    let value;
    while (++i < len) {
        value = arr[i];
        value[methodName](...args);
    }

    return arr;
}

export default invoke;
