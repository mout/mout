define(['./filter'], function (filter) {

    /**
     * Object reject
     */
    function reject(obj, callback, thisObj) {
        return filter(obj, function(value, index, obj) {
            return !callback.call(thisObj, value, index, obj);
        }, thisObj);
    }

    return reject;

});
