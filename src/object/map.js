import forOwn from './forOwn';
import makeIterator from '../function/makeIterator_';

/**
 * Creates a new object where all the values are the result of calling
 * `callback`.
 */
function mapValues(obj, callback, thisObj) {
    callback = makeIterator(callback, thisObj);
    var output = {};
    forOwn(obj, function(val, key, obj) {
        output[key] = callback(val, key, obj);
    });

    return output;
}
export default mapValues;
