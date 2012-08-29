define(['./forOwn'], function(forOwn) {

    /**
     * Creates a new object with all the properties where the callback returns
     * true.
     * @version 0.1.0
     */
    function filterValues(obj, callback, thisObj) {
        var output = {};
        forOwn(obj, function(value, key, obj) {
            if (callback.call(thisObj, value, key, obj)) {
                output[key] = value;
            }
        });

        return output;
    }
    return filterValues;
});
