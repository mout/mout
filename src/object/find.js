define(['./every'], function(every) {

    /**
     * Returns first item that matches criteria
     */
    function find(obj, callback, thisObj) {
        var result;
        every(obj, function(value, index, obj) {
            if (callback.call(thisObj, value, index, obj)) {
                result = value;
                return false; //break
            }
            return true;
        });
        return result;
    }

    return find;

});
