define(function () {

    /**
     * Array forEach
     * @version 0.4.0 (2012/07/26)
     */
    function forEach(arr, callback, thisObj) {
        var i = -1,
            n = arr.length >>> 0;
        while (++i < n) {
            //according to spec callback should only be called for
            //existing items
            if (i in arr) {
                callback.call(thisObj, arr[i], i, arr);
            }
        }
    }

    return forEach;

});
