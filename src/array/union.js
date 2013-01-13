define(['./unique'], function (unique) {

    /**
     * Concat multiple arrays and remove duplicates
     */
    function union(arrs) {
        return unique(Array.prototype.concat.apply([], arguments));
    }

    return union;

});
