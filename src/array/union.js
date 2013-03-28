define(['./unique', './append'], function (unique, append) {

    /**
     * Concat multiple arrays and remove duplicates
     */
    function union(arrs) {
        var results = [];
        var i = -1, l = arguments.length;
        while (++i < l) {
            append(results, arguments[i]);
        }

        return unique(results);
    }

    return union;

});
