import isObject from '../lang/isObject';
import values from '../object/values';
import arrMap from '../array/map';
import makeIterator from '../function/makeIterator_';

/**
 * Map collection values, returns Array.
 */
function map(list, callback, thisObj?: any) {
    callback = makeIterator(callback, thisObj);
    // list.length to check array-like object, if not array-like
    // we simply map all the object values
    if (isObject(list) && list.length == null) {
        list = values(list);
    }
    return arrMap(list, function(val, key, list) {
        return callback(val, key, list);
    });
}

export default map;
