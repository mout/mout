define(['./some'], function(some) {

    function find(list, iterator, context) {
        var result;
        some(list, function(value, index, list) {
            if (iterator.call(context, value, index, list)) {
                result = value;
                return true; //break
            }
        });
        return result;
    }

    return find;

});
