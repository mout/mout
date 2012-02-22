define(['./indexOf'], function (indexOf) {

    /**
     * If array contains values.
     * @version 0.1.0 (2011/10/31)
     */
    function contains(arr, val) {
        return indexOf(arr, val) !== -1;
    }
    return contains;
});
