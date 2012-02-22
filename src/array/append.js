define(function () {

    /**
     * Appends an array to the end of another.
     * The first array will be modified.
     * @version 0.1.0 (2012/01/31)
     */
    function append(arr1, arr2) {
        Array.prototype.push.apply(arr1, arr2);
        return arr1;
    }
    return append;
});
