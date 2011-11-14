define(['./reduce'], function (reduce) {

    /**
     * Similar to Array.join but skips null/undefined items.
     * @author Miller Medeiros
     * @version 0.1.0 (2011/11/15)
     */
    function join(arr, separator) {
        if (! arr.length) {
            return '';
        }
        separator = (separator == null)? ',' : separator;
        var result = reduce(arr, function (prev, cur) {
            return (cur == null)? prev : prev + separator + cur;
        });
        return result || '';
    }

    return join;
});
