define(function () {

    /**
     * Array some
     */
    function some(arr, callback, thisObj) {
        var result = false,
            i = -1,
            n = arr.length;
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
