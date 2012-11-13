define(['./every'], function(every) {

    function find(list, iterator, context) {
        var result;
        every(list, function(value, index, list) {
            if (iterator.call(context, value, index, list)) {
                result = value;
                return false; //break
            }
            return true;
        });
        return result;
    }

    return find;

});
