define(['./forEach'], function (forEach) {

    /**
     * Return maximum value inside array
     */
    function max(arr, iterator){
        if (arr.length && !iterator) {
            return Math.max.apply(Math, arr);
        } else if (!arr.length) {
            return Infinity;
        } else {
            var result,
                compare = -Infinity,
                tmp;
            forEach(arr, function(val, i, list){
                tmp = iterator(val, i, list);
                if (tmp > compare) {
                    compare = tmp;
                    result = val;
                }
            });
            return result;
        }
    }

    return max;

});
