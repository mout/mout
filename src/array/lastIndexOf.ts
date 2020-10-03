/**
 * Array lastIndexOf
 */
function lastIndexOf(arr, item, fromIndex) {
    if (arr == null) {
        return -1;
    }

    const len = arr.length;
    fromIndex = fromIndex == null || fromIndex >= len ? len - 1 : fromIndex;
    fromIndex = fromIndex < 0 ? len + fromIndex : fromIndex;

    while (fromIndex >= 0) {
        // we iterate over sparse items since there is no way to make it
        // work properly on IE 7-8. see #64
        if (arr[fromIndex] === item) {
            return fromIndex;
        }
        fromIndex--;
    }

    return -1;
}

export default lastIndexOf;
