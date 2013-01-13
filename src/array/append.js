define(function () {

    /**
     * Appends an array to the end of another.
     * The first array will be modified.
     */
    function append(arr1, arr2) {
        var pad = arr1.length,
            i = -1,
            n = arr2.length;
        while (++i < n) {
            arr1[pad + i] = arr2[i];
        }
        return arr1;
    }
    return append;
});
