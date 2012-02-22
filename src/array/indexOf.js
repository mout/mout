define(function () {

    /**
     * ES5 Array.indexOf
     * @version 0.2.1 (2011/11/25)
     */
    var indexOf = Array.prototype.indexOf?
                    function (arr, item, fromIndex) {
                        return arr.indexOf(item, fromIndex);
                    } :
                    function (arr, item, fromIndex) {
                        fromIndex = fromIndex || 0;
                        var n = arr.length >>> 0,
                            i = fromIndex < 0? n + fromIndex : fromIndex;
                        for (; i < n; i++) {
                            if (arr[i] === item) {
                                return i;
                            }
                        }
                        return -1;
                    };

    return indexOf;
});
