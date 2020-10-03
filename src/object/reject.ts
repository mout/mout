import filter from './filter';
import makeIterator from '../function/makeIterator_';

/**
 * Object reject
 */
function reject(obj, callback, thisObj?: any) {
    callback = makeIterator(callback, thisObj);
    return filter(
        obj,
        function(value, index, obj) {
            return !callback(value, index, obj);
        },
        thisObj
    );
}

export default reject;
