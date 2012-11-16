define(['./some'], function(some) {

    /**
     * Returns first item that matches criteria
     */
    function find(obj, callback, thisObj) {
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
