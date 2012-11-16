define(['./hasOwn'], function(hasOwn) {

    /**
     * Object every
     */
    function every(obj, callback, thisObj) {
        var result = true;
        for (var key in obj) {
            if (!hasOwn(obj, key)) {
                continue;
            }
            if (callback.call(thisObj, obj[key], key, obj) === false) {
                result = false;
                break;
            }
        }
        return result;
    }

    return every;

});
