import forOwn from './forOwn';
import makeIterator from '../function/makeIterator_';

/**
 * Object every
 */
function every(obj, callback, thisObj?: any) {
    callback = makeIterator(callback, thisObj);
    let result = true;
    forOwn(obj, function(val, key) {
        // we consider any falsy values as "false" on purpose so shorthand
        // syntax can be used to check property existence
        if (!callback(val, key, obj)) {
            result = false;
            return false; // break
        }
    });
    return result;
}

export default every;
