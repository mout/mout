import forOwn from './forOwn';
import makeIterator from '../function/makeIterator_';

/**
 * Creates a new object where all the values are the result of calling
 * `callback`.
 */
function mapValues(obj: object, callback: Function, thisObj?: any) {
    callback = makeIterator(callback, thisObj);
    const output: Record<string, any> = {};
    forOwn(obj, function(val: any, key: string, obj: any) {
        output[key] = callback(val, key, obj);
    });

    return output;
}
export default mapValues;
