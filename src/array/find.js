define(['./some'], function (some) {

    /**
     * Returns first item that matches criteria
     */
    function find(arr, iterator, thisObj){
        var needle,
            i = -1, n = arr.length,
            val;
        while (++i < n){
            val = arr[i];
            if (iterator.call(thisObj, val, i, arr)) {
                needle = val;
                break;
            }
        }
        return needle;
    }

    return find;

});
