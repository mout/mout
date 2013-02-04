define(['./some', '../function/shorthandIterator_'], function (some, shorthandIterator) {

    /**
     * Returns first item that matches criteria
     */
    function find(arr, iterator, thisObj){
        iterator = shorthandIterator(iterator);
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
