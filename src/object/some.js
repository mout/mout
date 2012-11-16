define(['./forOwn'], function(forOwn) {

    /**
     * Object some
     */
    function some(obj, callback, thisObj) {
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
