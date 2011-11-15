define(function () {

    /**
     * ES5 Array.lastIndexOf
     * @author Miller Medeiros
     * @version 0.2.0 (2011/11/15)
     */
    var lastIndexOf = Array.prototype.lastIndexOf?
                    function (arr, item, fromIndex) {
                            return fromIndex == null? arr.lastIndexOf(item) : arr.lastIndexOf(item, fromIndex);
                    } :
                    function (arr, item, fromIndex) {
                        fromIndex = (fromIndex == null || fromIndex >= arr.length)? arr.length - 1 : fromIndex;
                        fromIndex = (fromIndex < 0)? arr.length + fromIndex : fromIndex;
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
