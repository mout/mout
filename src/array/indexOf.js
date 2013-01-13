define(function () {

    /**
     * Array.indexOf
     */
    function indexOf(arr, item, fromIndex) {
        fromIndex = fromIndex || 0;
        var n = arr.length,
            i = fromIndex < 0? n + fromIndex : fromIndex;
        while (i < n) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if (arr[i] === item) {
                return i;
            }
            i += 1;
        }
        return -1;
    }

    return indexOf;
});
