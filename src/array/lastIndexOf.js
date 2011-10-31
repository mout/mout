define(function () {

    var _nativeLastIndexOf = Array.prototype.lastIndexOf;

    /**
     * ES5 Array.lastIndexOf (since it doesn't on work on IE 6-8 natively)
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/31)
     */
    function lastIndexOf(arr, item, fromIndex){
        fromIndex = (fromIndex == null)? arr.length - 1 : fromIndex;

        if(_nativeLastIndexOf && arr.lastIndexOf === _nativeLastIndexOf){
            return arr.lastIndexOf(item, fromIndex);
        } else {
            var n = fromIndex < 0? arr.length + fromIndex : fromIndex;
            while (n >= 0) {
                if (arr[n] === item) {
                    return n;
                }
                n -= 1;
            }
            return -1;
        }
    }

    return lastIndexOf;
});
