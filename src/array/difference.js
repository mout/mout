define(['./unique', './filter', './some', './contains'], function (unique, filter, some, contains) {


    /**
     * Return a new Array with elements that aren't present in the other Arrays.
     * @version 0.1.0 (2011/01/12)
     */
    function difference(arr) {
        var arrs = Array.prototype.slice.call(arguments, 1),
            result = filter(unique(arr), function(needle){
                return !some(arrs, function(haystack){
                    return contains(haystack, needle);
                });
            });
        return result;
    }

    return difference;

});
