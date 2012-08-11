define(['./forEach'], function (forEach) {

    /**
     * Array filter
     * @version 0.4.0 (2012/07/26)
     */
    function filter(arr, callback, thisObj) {
        var results = [];
        forEach(arr, function (val, i, arr) {
            if ( callback.call(thisObj, val, i, arr) ) {
                results.push(val);
            }
        });
        return results;
    }

    return filter;

});
