define(['./forOwn', '../function/makeIterator_'], function(forOwn, makeIterator) {

    /**
     * Object every
     */
    function every(obj, callback, thisObj) {
        callback = makeIterator(callback);
        var result = true;
        forOwn(obj, function(val, key) {
            // we consider any falsy values as "false" on purpose so shorthand
            // syntax can be used to check property existence
            if (!callback.call(thisObj, val, key, obj)) {
                result = false;
                return false; // break
            }
        });
        return result;
    }

    return every;

});
