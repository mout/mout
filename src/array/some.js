define(function (forEach) {

    /**
     * ES5 Array.some
     * @version 0.2.1 (2011/11/25)
     */
    var some = Array.prototype.some?
                function (arr, callback, thisObj) {
                    return arr.some(callback, thisObj);
                } :
                function (arr, callback, thisObj) {
                    var result = false,
                        n = arr.length >>> 0;
                    while (n--) {
                        //according to spec callback should only be called for
                        //existing items
                        if ( n in arr && callback.call(thisObj, arr[n], n, arr) ) {
                            result = true;
                            break;
                        }
                    }
                    return result;
                };

    return some;
});
