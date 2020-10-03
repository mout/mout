import some from './some';
import makeIterator from '../function/makeIterator_';

/**
 * Returns first item that matches criteria
 */
function find(obj, callback, thisObj?: any) {
    callback = makeIterator(callback, thisObj);
    let result;
    some(obj, function(value, key, obj) {
        if (callback(value, key, obj)) {
            result = value;
            return true; // break
        }
    });
    return result;
}

export default find;
