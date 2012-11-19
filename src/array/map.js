define(['./forEach'], function (forEach) {

    /**
     * Array map
     * @version 0.5.0 (2012/11/19)
     */
    function map(arr, callback, thisObj) {
        var results = [];
        if (arr == null){
            return results;
        }
        forEach(arr, function (val, i, arr) {
            results[i] = callback.call(thisObj, val, i, arr);
        });
        return results;
    }

     return map;
});
