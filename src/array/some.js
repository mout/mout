define(function (forEach) {

    /**
     * Array some
     * @version 0.3.0 (2012/07/26)
     */
    function some(arr, callback, thisObj) {
        var result = false,
            i = -1,
            n = arr.length >>> 0;
        while (++i < n) {
            //according to spec callback should only be called for
            //existing items
            if ( i in arr && callback.call(thisObj, arr[i], i, arr) ) {
                result = true;
                break;
            }
        }
        return result;
    }

    return some;
});
