define(['./forEach'], function (forEach) {

    /**
     * ES5 Array.map
     * @version 0.2.0 (2011/11/15)
     */
    var map = Array.prototype.map?
                function (arr, callback, thisObj) {
                    return arr.map(callback, thisObj);
                } :
                function (arr, callback, thisObj) {
                    var results = [];
                    forEach(arr, function (val, i, arr) {
                        results[results.length] = callback.call(thisObj, val, i, arr);
                    });
                    return results;
                };

     return map;
});
