define(function (forEach) {

    var _nativeSome = Array.prototype.some;

    /**
     * ES5 Array.some
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/31)
     */
    function some(arr, callback, thisObj){
        if (_nativeSome && arr.some === _nativeSome) {
            return arr.some(callback, thisObj);
        } else {
            var result = false,
                n = arr.length;
            while(n--){
                //according to spec callback should only be called for
                //existing items
                if ( n in arr && callback.call(thisObj, arr[n], n, arr) ) {
                    result = true;
                    break;
                }
            }
            return result;
        }
    }
    return some;
});
