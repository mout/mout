import clone from './clone';
import forOwn from '../object/forOwn';
import kindOf from './kindOf';
import isPlainObject from './isPlainObject';

/**
 * Recursively clone native types.
 */
function deepClone(val, instanceClone?: Function) {
    if (Array.isArray(val)) {
        return cloneArray(val, instanceClone);
    } else if (kindOf(val) === 'Object') {
        return cloneObject(val, instanceClone);
    } else {
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
            out
        );
        return out;
    } else if (instanceClone) {
        return instanceClone(source);
    } else {
        return source;
    }
}

function cloneArray<T>(arr: T[], instanceClone?: Function): T[] {
    const out: T[] = [];
    const n = arr.length;
    let i = -1;
    while (++i < n) {
        out[i] = deepClone(arr[i], instanceClone);
    }
    return out;
}

export default deepClone;
