define(function () {

    /**
     * Array forEach
     * @version 0.5.0 (2012/10/30)
     */
    function forEach(arr, callback, thisObj) {
        var i = -1,
            n = arr.length >>> 0;
        while (++i < n) {
            //according to spec callback should only be called for
            //existing items
            if (i in arr) {
                if ( callback.call(thisObj, arr[i], i, arr) === false ) {
                    break;
                }
            }
        }
    }

    return forEach;

});
