import hasOwn from './hasOwn';
import deepClone from '../lang/deepClone';
import isObject from '../lang/isObject';

/**
 * Deep merge objects.
 */
function merge<T extends {}>(...values: T[]) {
    let i = 1;
    let key;
    let val;
    let obj;

    // make sure we don't modify source element and it's properties
    // objects are passed by reference
    const target = deepClone(values[0]);

    while ((obj = values[i++])) {
        for (key in obj) {
            if (!hasOwn(obj, key)) {
                continue;
            }

            val = obj[key];

            if (isObject(val) && isObject(target[key])) {
                // inception, deep merge objects
                target[key] = merge(target[key], val);
            } else {
                // make sure arrays, regexp, date, objects are cloned
                target[key] = deepClone(val);
            }
        }
    }

    return target;
}

export default merge;
