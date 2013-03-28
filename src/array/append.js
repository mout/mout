define(function () {

    /**
     * Appends an array to the end of another.
     * The first array will be modified.
     */
    function append(arr1, arr2) {
        if (arr2 == null) {
            return arr1;
        }

        var pad = arr1.length,
            i = -1,
            l = arr2.length;
        while (++i < l) {
            arr1[pad + i] = arr2[i];
        }
        return arr1;
    }
    return append;
});
