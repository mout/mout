import isFunction from '../lang/isFunction';

/**
 * Creates an object that holds a lookup for the objects in the array.
 */
function toLookup(arr, key) {
    const result = {};
    if (arr == null) {
        return result;
    }

    let i = -1;
    const len = arr.length;
    let value;
    if (isFunction(key)) {
        while (++i < len) {
            value = arr[i];
            result[key(value)] = value;
        }
    } else {
        while (++i < len) {
            value = arr[i];
            result[value[key]] = value;
        }
    }

    return result;
}
export default toLookup;
