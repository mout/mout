define(['./forEach'], function (forEach) {

    function filter(list, iterator, context) {
        list = list || [];
        var results = [];

        forEach(list, function(value, index, list) {
            if (iterator.call(context, value, index, list)) {
                results[results.length] = value;
            }
        });

        return results;
    }

    return filter;

});
