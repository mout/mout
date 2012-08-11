define(function () {

    /**
     * Array.indexOf
     * @version 0.3.0 (2012/07/26)
     */
    function indexOf(arr, item, fromIndex) {
        fromIndex = fromIndex || 0;
        var n = arr.length >>> 0,
            i = fromIndex < 0? n + fromIndex : fromIndex;
        while (i < n) {
            //it should skip sparse items
            if (i in arr && arr[i] === item) {
                return i;
            }
            i += 1;
        }
        return -1;
    }

    return indexOf;
});
