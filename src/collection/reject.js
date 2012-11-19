define(['./filter'], function (filter) {

    /**
     * Inverse or collection/filter
     * @version 0.1.0 (2012/11/13)
     */
    function reject(list, iterator, context) {
        return filter(list, function(value, index, list) {
            return !iterator.call(context, value, index, list);
        }, context);
    }

    return reject;

});
