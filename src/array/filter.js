define(['./forEach'], function (forEach) {

    /**
     * ES5 Array.filter
     * @version 0.3.0 (2011/11/15)
     */
    var filter = Array.prototype.filter?
                function (arr, callback, thisObj) {
                    return arr.filter(callback, thisObj);
                } :
                function (arr, callback, thisObj) {
                    var results = [];
                    forEach(arr, function (val, i, arr) {
                        if ( callback.call(thisObj, val, i, arr) ) {
                            results.push(val);
                        }
                    });
                    return results;
                };

    return filter;

});
