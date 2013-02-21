define(['./some', '../function/makeIterator_'], function(some, makeIterator) {

    /**
     * Returns first item that matches criteria
     */
    function find(obj, callback, thisObj) {
        callback = makeIterator(callback);
        var result;
        some(obj, function(value, key, obj) {
            if (callback.call(thisObj, value, key, obj)) {
                result = value;
                return true; //break
            }
        });
        return result;
    }

    return find;

});
