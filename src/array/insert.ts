import difference from './difference';
import slice from './slice';

/**
 * Insert item into array if not already present.
 */
function insert(arr, rest_items) {
    const diff = difference(slice(arguments, 1), arr);
    if (diff.length) {
        Array.prototype.push.apply(arr, diff);
    }
    return arr.length;
}
export default insert;
