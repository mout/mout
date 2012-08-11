define(['./forEach'], function (forEach) {

    /**
     * Array map
     * @version 0.3.0 (2012/07/26)
     */
    function map(arr, callback, thisObj) {
        // need to copy arr.length because of sparse arrays
        var results = new Array(arr.length);
        forEach(arr, function (val, i, arr) {
            results[i] = callback.call(thisObj, val, i, arr);
        });
        return results;
    }

     return map;
});
