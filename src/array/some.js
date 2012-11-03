define(function () {

    /**
     * Array some
     * @version 0.4.0 (2012/10/30)
     */
    function some(arr, callback, thisObj) {
        var result = false,
            i = -1,
            n = arr.length >>> 0;
        while (++i < n) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if ( callback.call(thisObj, arr[i], i, arr) ) {
                result = true;
                break;
            }
        }
        return result;
    }

    return some;
});
