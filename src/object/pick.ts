import slice from '../array/slice';

/**
 * Return a copy of the object, filtered to only have values for the whitelisted keys.
 */
function pick(obj, varKeys) {
    const keys = typeof arguments[1] !== 'string' ? arguments[1] : slice(arguments, 1);
    const out = {};
    let i = 0;
    let key;
    while ((key = keys[i++])) {
        out[key] = obj[key];
    }
    return out;
}

export default pick;
