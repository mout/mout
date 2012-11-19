define(['./forEach'], function (forEach) {

    /**
     * filter collection values, returns array.
     * @version 0.3.0 (2012/11/19)
     */
    function filter(list, iterator, context) {
        var results = [];
        if (!list) {
            return results;
        }
        forEach(list, function(value, index, list) {
            if (iterator.call(context, value, index, list)) {
                results[results.length] = value;
            }
        });
        return results;
    }

    return filter;

});
