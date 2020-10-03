import unique from './unique';
import filter from './filter';
import some from './some';
import contains from './contains';
import slice from './slice';

/**
 * Return a new Array with elements that aren't present in the other Arrays.
 */
function difference(arr, ...others) {
    const arrs = slice(arguments, 1);
    const result = filter(unique(arr), function(needle) {
        return !some(arrs, function(haystack) {
            return contains(haystack, needle);
        });
    });
    return result;
}

export default difference;
