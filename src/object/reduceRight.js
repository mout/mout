define(['./map', './pluck', './reduce'], function (map, pluck, reduce) {

    /**
     * Object reduceRight
     */
    function reduceRight(obj, iterator, memo, context) {
        var reversed = map(obj, function(val, i) {
            return {index: i, value: val};
        }).reverse();

        reversed = pluck(reversed, 'value');

        return reduce(reversed, iterator, memo, context);
    }

    return reduceRight;

});
