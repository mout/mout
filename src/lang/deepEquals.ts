import is from './is';
import isObject from './isObject';
import isArray from './isArray';
import objEquals from '../object/equals';
import arrEquals from '../array/equals';

/**
 * Recursively checks for same properties and values.
 */
function deepEquals(a, b, callback = is) {
    const bothObjects = isObject(a) && isObject(b);
    const bothArrays = !bothObjects && isArray(a) && isArray(b);

    if (!bothObjects && !bothArrays) {
        return callback(a, b);
    }

    function compare(a, b) {
        return deepEquals(a, b, callback);
    }

    const method = bothObjects ? objEquals : arrEquals;
    return method(a, b, compare);
}

export default deepEquals;
