define(function () {

    /**
     * ES5 Array.every
     * @version 0.2.1 (2011/11/25)
     */
    var every = Array.prototype.every?
                function (arr, callback, thisObj) {
                    return arr.every(callback, thisObj);
                } :
                function (arr, callback, thisObj) {
                    var result = true,
                        n = arr.length >>> 0;
                    while (n--) {
                        //according to spec callback should only be called for
                        //existing items
                        if ( n in arr && !callback.call(thisObj, arr[n], n, arr) ) {
                            result = false;
                            break;
                        }
                    }
                    return result;
                };

    return every;
});
