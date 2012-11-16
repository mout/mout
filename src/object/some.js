define(['./hasOwn'], function(hasOwn) {

    /**
     * Object some
     */
    function some(obj, callback, thisObj) {
        var result = false;
        for (var key in obj) {
            if (!hasOwn(obj, key)) {
                continue;
            }
            if (callback.call(thisObj, obj[key], key, obj)) {
                result = true;
                break;
            }
        }
        return result;
    }

    return some;

});
