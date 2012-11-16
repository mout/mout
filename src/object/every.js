define(['./forOwn'], function(forOwn) {

    /**
     * Object every
     */
    function every(obj, callback, thisObj) {
        var result = true;
        forOwn(obj, function(val, key) {
            if (callback.call(thisObj, val, key, obj) === false) {
                result = false;
                return false; // break
            }
        });
        return result;
    }

    return every;

});
