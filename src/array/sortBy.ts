import sort from './sort';
import makeIterator from '../function/makeIterator_';

/*
 * Sort array by the result of the callback
 */
function sortBy(arr, callback, context) {
    callback = makeIterator(callback, context);

    return sort(arr, function(a, b) {
        a = callback(a);
        b = callback(b);
        return a < b ? -1 : a > b ? 1 : 0;
    });
}

export default sortBy;
