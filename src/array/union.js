define(['./unique'], function (unique) {

    /**
     * Concat multiple arrays and remove duplicates
     * @version 0.1.0 (2011/01/12)
     */
    function union(arrs) {
        return unique(Array.prototype.concat.apply([], arguments));
    }

    return union;

});
