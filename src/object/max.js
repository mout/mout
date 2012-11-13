define(['./forOwn', './values'], function(forOwn, values) {

    function min(obj, iterator) {
        var valueArr = values(obj);
        if (valueArr.length && !iterator) {
            return Math.max.apply(Math, valueArr);
        } else if (!valueArr.length) {
            return Infinity;
        } else {
            var result,
                compare = -Infinity,
                tmp;
            forOwn(obj, function(val, key, list){
                tmp = iterator(val, key, list);
                if (tmp > compare) {
                    compare = tmp;
                    result = val;
                }
            });
            return result;
        }
    }

    return min;
});
