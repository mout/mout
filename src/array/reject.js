define(['./forEach', '../function/shorthandIterator_'], function(forEach, shorthandIterator) {

    /**
     * Array reject
     */
    function reject(arr, callback, thisObj) {
        callback = shorthandIterator(callback);
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
