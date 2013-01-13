define(['./forOwn'], function(forOwn) {

    /**
     * Creates a new object where all the values are the result of calling
     * `callback`.
     */
    function mapValues(obj, callback, thisObj) {
        var output = {};
        forOwn(obj, function(val, key, obj) {
            output[key] = callback.call(thisObj, val, key, obj);
        });

        return output;
    }
    return mapValues;
});
