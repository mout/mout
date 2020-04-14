import unique from './unique';
import filter from './filter';
import every from './every';
import contains from './contains';
import slice from './slice';

/**
 * Return a new Array with elements common to all Arrays.
 * - based on underscore.js implementation
 */
function intersection(arr) {
    const arrs = slice(arguments, 1);
    const result = filter(unique(arr), function(needle) {
        return every(arrs, function(haystack) {
            return contains(haystack, needle);
        });
    });
    return result;
}

export default intersection;
