import slice from '../array/slice';
import contains from '../array/contains';

/**
 * Return a copy of the object, filtered to only contain properties except the blacklisted keys.
 */
function omit(obj, ..._) {
    const keys = typeof arguments[1] !== 'string' ? arguments[1] : slice(arguments, 1);
    const out = {};

    for (const property in obj) {
        /* eslint-disable-next-line no-prototype-builtins */
        if (obj.hasOwnProperty(property) && !contains(keys, property)) {
            out[property] = obj[property];
        }
    }
    return out;
}

export default omit;
