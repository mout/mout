define(function (forEach) {

    /**
     * ES5 Array.some
     * @version 0.2.2 (2012/06/07)
     */
    var some = Array.prototype.some?
                function (arr, callback, thisObj) {
                    return arr.some(callback, thisObj);
                } :
                function (arr, callback, thisObj) {
                    var result = false,
                        n = arr.length,
                        i = 0;
                    while (i < n) {
                        //according to spec callback should only be called for
                        //existing items
                        if ( i in arr && callback.call(thisObj, arr[i], i, arr) ) {
                            result = true;
                            break;
                        }
                        i += 1;
                    }
                    return result;
                };

    return some;
});
