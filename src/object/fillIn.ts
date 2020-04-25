import forEach from '../array/forEach';
import slice from '../array/slice';
import forOwn from './forOwn';

/**
 * Copy missing properties in the obj from the defaults.
 */
function fillIn(obj, varDefaults) {
    forEach(slice(arguments, 1), function(base) {
        forOwn(base, function(val, key) {
            if (obj[key] == null) {
                obj[key] = val;
            }
        });
    });
    return obj;
}

export default fillIn;
