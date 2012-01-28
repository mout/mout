define(['./indexOf'], function (indexOf) {

    /**
     * Inserts item to array only if not already present.
     * @author André Cruz
     * @version 0.1.0 (2012/01/28)
     */
    function include(arr, val) {
        if (indexOf(arr, val) === -1) {
            arr.push(val);
            return true;
        } else {
            return false;
        }
    }
    return include;
});
