define(['./indexOf'], function (indexOf) {

    /**
     * Combines an array with all the items of another.
     * Does not allow duplicates and is case and type sensitive.
     * @version 0.1.0 (2012/01/28)
     */
    function combine(arr1, arr2) {

        var x, length = arr2.length;

        for (x = 0; x < length; x++) {
            if (indexOf(arr1, arr2[x]) === -1) {
                arr1.push(arr2[x]);
            }
        }

        return arr1;
    }
    return combine;
});
