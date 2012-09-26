define(['./forEach'], function(forEach) {

    /**
     * Array reject
     * @version 0.1.0 (2012/09/04)
     */
    function reject(arr, callback, thisObj) {
        var results = [];
        forEach(arr, function(val, i, arr) {
            if (!callback.call(thisObj, val, i, arr)) {
                results.push(val);
            }
        });
        return results;
    }

    return reject;
});
