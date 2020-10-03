import forOwn from './forOwn';
import makeIterator from '../function/makeIterator_';

/**
 * Object some
 */
function some(obj, callback, thisObj?: any) {
    callback = makeIterator(callback, thisObj);
    let result = false;
    forOwn(obj, function(val, key) {
        if (callback(val, key, obj)) {
            result = true;
            return false; // break
        }
    });
    return result;
}

export default some;
