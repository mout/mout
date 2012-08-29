define(['./forOwn'], function(forOwn) {

    /**
     * Creates a new object where all the values are the result of calling
     * `callback`.
     * @version 0.1.0
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
