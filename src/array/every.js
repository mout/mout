define(function (forEach) {

    var _nativeEvery = Array.prototype.every;

    /**
     * ES5 Array.every
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/31)
     */
    function every(arr, callback, thisObj){
        if (_nativeEvery && arr.every === _nativeEvery) {
            return arr.every(callback, thisObj);
        } else {
            var result = true,
                n = arr.length;
            while(n--){
                //according to spec callback should only be called for
                //existing items
                if ( n in arr && !callback.call(thisObj, arr[n], n, arr) ) {
                    result = false;
                    break;
                }
            }
            return result;
        }
    }
    return every;
});
