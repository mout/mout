define(['./forEach', '../function/makeIterator_'], function (forEach, makeIterator) {

    /**
     * Array map
     */
    function map(arr, callback, thisObj) {
        callback = makeIterator(callback);
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
