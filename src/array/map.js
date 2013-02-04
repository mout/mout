define(['./forEach', '../function/shorthandIterator_'], function (forEach, shorthandIterator) {

    /**
     * Array map
     */
    function map(arr, callback, thisObj) {
        callback = shorthandIterator(callback);
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
