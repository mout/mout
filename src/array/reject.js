define(['./forEach', '../function/makeIterator_'], function(forEach, makeIterator) {

    /**
     * Array reject
     */
    function reject(arr, callback, thisObj) {
        callback = makeIterator(callback);
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
