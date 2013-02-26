define(['../function/makeIterator_'], function (makeIterator) {

    /**
     * Returns the index of the first item that matches criteria
     */
    function findIndex(arr, iterator, thisObj){
        iterator = makeIterator(iterator, thisObj);
        var i = -1, n = arr.length;
        while (++i < n) {
            if (iterator(arr[i], i, arr)) {
                return i;
            }
        }

        return -1;
    }

    return findIndex;
});
