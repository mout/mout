import indexOf from './indexOf';

/**
 * Remove a single item from the array.
 * (it won't remove duplicates, just a single item)
 */
function remove(arr, item) {
    const idx = indexOf(arr, item);
    if (idx !== -1) arr.splice(idx, 1);
}

export default remove;
