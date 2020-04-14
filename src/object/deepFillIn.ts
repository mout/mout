import forOwn from './forOwn';
import isPlainObject from '../lang/isPlainObject';

/**
 * Deeply copy missing properties in the target from the defaults.
 */
function deepFillIn(target, defaults) {
    let i = 0;
    const n = arguments.length;
    let obj;

    while (++i < n) {
        obj = arguments[i];
        if (obj) {
            // jshint loopfunc: true
            forOwn(obj, function(newValue, key) {
                const curValue = target[key];
                if (curValue == null) {
                    target[key] = newValue;
                } else if (isPlainObject(curValue) && isPlainObject(newValue)) {
                    deepFillIn(curValue, newValue);
                }
            });
        }
    }

    return target;
}

export default deepFillIn;
