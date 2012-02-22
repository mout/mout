define(['./difference', '../lang/toArray'], function (difference, toArray) {

    /**
     * Insert item into array if not already present.
     * @version 0.2.0 (2012/01/28)
     */
    function insert(arr, rest_items) {
        var diff = difference(toArray(arguments).slice(1), arr);
        if (diff.length) {
            Array.prototype.push.apply(arr, diff);
        }
        return arr.length;
    }
    return insert;
});
