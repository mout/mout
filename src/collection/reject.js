define(['./filter'], function (filter) {

    /**
     * Inverse or collection/filter
     */
    function reject(list, iterator, context) {
        return filter(list, function(value, index, list) {
            return !iterator.call(context, value, index, list);
        }, context);
    }

    return reject;

});
