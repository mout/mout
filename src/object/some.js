define(['./forOwn', '../function/makeIterator_'], function(forOwn, makeIterator) {

    /**
     * Object some
     */
    function some(obj, callback, thisObj) {
        callback = makeIterator(callback);
        var result = false;
        forOwn(obj, function(val, key) {
            if (callback.call(thisObj, val, key, obj)) {
                result = true;
                return false; // break
            }
        });
        return result;
    }

    return some;

});
