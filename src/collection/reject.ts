import filter from './filter';
import makeIterator from '../function/makeIterator_';

/**
 * Inverse or collection/filter
 */
function reject(list, iterator, thisObj?: any) {
    iterator = makeIterator(iterator, thisObj);
    return filter(
        list,
        function(value, index, list) {
            return !iterator(value, index, list);
        },
        thisObj
    );
}

export default reject;
