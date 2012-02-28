define(['./some'], function (some) {

    /**
     * Returns first item that matches criteria
     * @version 0.1.0 (2012/02/28)
     */
    function find(arr, iterator, thisObj){
        var needle;
        some(arr, function(val, i, arr){
            if (iterator.call(thisObj, val, i, arr)) {
                needle = val;
                return true; // stop loop
            }
        });
        return needle;
    }

    return find;

});
