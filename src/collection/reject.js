define(['./filter', '../function/makeIterator_'], function (filter, makeIterator) {

    /**
     * Inverse or collection/filter
     */
    function reject(list, iterator, context) {
        iterator = makeIterator(iterator);
        return filter(list, function(value, index, list) {
            return !iterator.call(context, value, index, list);
        }, context);
    }

    return reject;

});
