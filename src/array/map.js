define(['./forEach'], function (forEach) {

    /**
     * Array map
     * @version 0.4.0 (2012/10/30)
     */
    function map(arr, callback, thisObj) {
        var results = [];
        if (arr == null){
            return results;
        }
        // need to copy arr.length because of sparse arrays (#64)
        results.length = arr.length;
        forEach(arr, function (val, i, arr) {
            results[i] = callback.call(thisObj, val, i, arr);
        });
        return results;
    }

     return map;
});
