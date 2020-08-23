import forEach from '../array/forEach';
import slice from '../array/slice';
import forOwn from './forOwn';

/**
 * Copy missing properties in the obj from the defaults.
 */
function fillIn<T extends {}, E extends {}>(obj: T, ...varDefaults): T & E {
    forEach(slice(varDefaults), function(base) {
        forOwn(base, function(val, key) {
            if (obj[key] == null) {
                obj[key] = val;
            }
        });
    });
    return obj as T & E;
}

export default fillIn;
