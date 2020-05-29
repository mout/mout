import forEach from './forEach';
import makeIterator from '../function/makeIterator_';

/**
 * filter collection values, returns array.
 */
function filter(list, iterator, thisObj?: any) {
    iterator = makeIterator(iterator, thisObj);
    const results = [];
    if (!list) {
        return results;
    }
    forEach(list, function(value, index, list) {
        if (iterator(value, index, list)) {
            results[results.length] = value;
        }
    });
    return results;
}

export default filter;
