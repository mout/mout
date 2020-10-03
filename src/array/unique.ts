import filter from './filter';

/**
 * @return {array} Array of unique items
 */
function unique(arr, compare = isEqual) {
    return filter(arr, function(item, i, arr) {
        const n = arr.length;
        while (++i < n) {
            if (compare(item, arr[i])) {
                return false;
            }
        }
        return true;
    });
}

function isEqual(a, b) {
    return a === b;
}

export default unique;
