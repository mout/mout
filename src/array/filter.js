define(['./forEach'], function (forEach) {

    /**
     * Array filter
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
