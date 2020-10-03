import hasOwn from './hasOwn';
import every from './every';
import isObject from '../lang/isObject';
import is from '../lang/is';

// Makes a function to compare the object values from the specified compare
// operation callback.
function makeCompare(callback) {
    return function(value, key) {
        return hasOwn(this, key) && callback(value, this[key]);
    };
}

function checkProperties(value, key) {
    return hasOwn(this, key);
}

/**
 * Checks if two objects have the same keys and values.
 */
function equals(a, b, callback = is) {
    if (!isObject(a) || !isObject(b)) {
        return callback(a, b);
    }

    return every(a, makeCompare(callback), b) && every(b, checkProperties, a);
}

export default equals;
