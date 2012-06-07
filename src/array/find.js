define(['./some'], function (some) {

    /**
     * Returns first item that matches criteria
     * @version 0.2.0 (2012/06/07)
     */
    function find(arr, iterator, thisObj){
        var needle,
            i = 0, n = arr.length,
            val;
        while (i < n){
            val = arr[i];
            if (iterator.call(thisObj, val, i, arr)) {
                needle = val;
                break;
            }
            i += 1;
        }
        return needle;
    }

    return find;

});
