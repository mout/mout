define(['./forOwn'], function(forOwn) {

    /**
     * Object reduce
     */
    function reduce(obj, callback, memo, thisObj) {
        forOwn(obj, function(value, index, list) {
            memo = memo || value;
            memo = callback.call(thisObj, memo, value, index, list);
        });

        return memo;
    }

    return reduce;

});
