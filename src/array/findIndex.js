define(['../function/makeIterator_'], function (makeIterator) {

    /**
     * Returns the index of the first item that matches criteria
     */
    function findIndex(arr, iterator, thisObj){
        iterator = makeIterator(iterator);
        var i = -1, n = arr.length;
        while (++i < n) {
            if (iterator.call(thisObj, arr[i], i, arr)) {
                return i;
            }
        }

        return -1;
    }

    return findIndex;
});
