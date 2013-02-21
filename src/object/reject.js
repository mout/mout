define(['./filter', '../function/makeIterator_'], function (filter, makeIterator) {

    /**
     * Object reject
     */
    function reject(obj, callback, thisObj) {
        callback = makeIterator(callback);
        return filter(obj, function(value, index, obj) {
            return !callback.call(thisObj, value, index, obj);
        }, thisObj);
    }

    return reject;

});
