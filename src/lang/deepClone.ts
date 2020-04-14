import clone from './clone';
import forOwn from '../object/forOwn';
import kindOf from './kindOf';
import isPlainObject from './isPlainObject';

/**
 * Recursively clone native types.
 */
function deepClone(val, instanceClone) {
    switch (kindOf(val)) {
    case 'Object':
        return cloneObject(val, instanceClone);
    case 'Array':
        return cloneArray(val, instanceClone);
    default:
        return clone(val);
    }
}

function cloneObject(source, instanceClone) {
    if (isPlainObject(source)) {
        const out = {};
        forOwn(
            source,
            function(val, key) {
                this[key] = deepClone(val, instanceClone);
            },
            out,
        );
        return out;
    } else if (instanceClone) {
        return instanceClone(source);
    } else {
        return source;
    }
}

function cloneArray(arr, instanceClone) {
    const out = [];
    let i = -1;
    const n = arr.length;
    let val;
    while (++i < n) {
        out[i] = deepClone(arr[i], instanceClone);
    }
    return out;
}

export default deepClone;
