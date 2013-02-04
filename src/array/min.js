define(['./forEach', '../function/makeIterator_'], function (forEach, makeIterator) {

    /**
     * Return minimum value inside array
     */
    function min(arr, iterator){
        if (arr.length && !iterator) {
            return Math.min.apply(Math, arr);
        } else if (!arr.length) {
            return -Infinity;
        } else {
            iterator = makeIterator(iterator);
            var result,
                compare = Infinity,
                tmp;
            forEach(arr, function(val, i, list){
                tmp = iterator(val, i, list);
                if (tmp < compare) {
                    compare = tmp;
                    result = val;
                }
            });
            return result;
        }
    }

    return min;

});
