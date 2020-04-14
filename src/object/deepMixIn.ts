import forOwn from './forOwn';
import isPlainObject from '../lang/isPlainObject';

/**
 * Mixes objects into the target object, recursively mixing existing child
 * objects.
 */
function deepMixIn(target, objects) {
    let i = 0;
    const n = arguments.length;
    let obj;

    while (++i < n) {
        obj = arguments[i];
        if (obj) {
            forOwn(obj, copyProp, target);
        }
    }

    return target;
}

function copyProp(val, key) {
    const existing = this[key];
    if (isPlainObject(val) && isPlainObject(existing)) {
        deepMixIn(existing, val);
    } else {
        this[key] = val;
    }
}

export default deepMixIn;
