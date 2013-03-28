define(['../function/makeIterator_'], function (makeIterator) {

    /**
     * Returns the index of the first item that matches criteria
     */
    function findIndex(arr, iterator, thisObj){
        iterator = makeIterator(iterator, thisObj);
        if (arr == null) {
            return -1;
        }

        var i = -1, l = arr.length;
        while (++i < l) {
            if (iterator(arr[i], i, arr)) {
                return i;
            }
        }

        return -1;
    }

    return findIndex;
});
