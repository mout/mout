define(['./forEach', '../function/makeIterator_'], function (forEach, makeIterator) {

    /**
     * Array map
     */
    function map(arr, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var results = [];
        if (arr == null){
            return results;
        }

        var i = -1, l = arr.length;
        while (++i < l) {
            results[i] = callback(arr[i], i, arr);
        }

        return results;
    }

     return map;
});
