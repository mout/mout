import unique from './unique';
import filter from './filter';
import contains from './contains';

/**
 * Exclusive OR. Returns items that are present in a single array.
 * - like ptyhon's `symmetric_difference`
 */
function xor(arr1, arr2) {
    arr1 = unique(arr1);
    arr2 = unique(arr2);

    const a1 = filter(arr1, function(item) {
        return !contains(arr2, item);
    });
    const a2 = filter(arr2, function(item) {
        return !contains(arr1, item);
    });

    return a1.concat(a2);
}

export default xor;
