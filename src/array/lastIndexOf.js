define(function () {

    /**
     * ES5 Array.lastIndexOf
     * @version 0.2.1 (2011/11/25)
     */
    var lastIndexOf = Array.prototype.lastIndexOf?
                    function (arr, item, fromIndex) {
                            return fromIndex == null? arr.lastIndexOf(item) : arr.lastIndexOf(item, fromIndex);
                    } :
                    function (arr, item, fromIndex) {
                        var len = arr.length >>> 0;
                        fromIndex = (fromIndex == null || fromIndex >= len)? len - 1 : fromIndex;
                        fromIndex = (fromIndex < 0)? len + fromIndex : fromIndex;
                        while (fromIndex >= 0) {
                            if (arr[fromIndex] === item) {
                                return fromIndex;
                            }
                            fromIndex--;
                        }
                        return -1;
                    };

    return lastIndexOf;
});
