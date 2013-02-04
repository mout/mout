define(['../function/makeIterator_'], function (makeIterator) {

    /**
     * Array every
     */
    function every(arr, callback, thisObj) {
        callback = makeIterator(callback);
        var result = true,
            i = -1,
            n = arr.length;
        while (++i < n) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if (!callback.call(thisObj, arr[i], i, arr) ) {
                result = false;
                break;
            }
        }
        return result;
    }

    return every;
});
