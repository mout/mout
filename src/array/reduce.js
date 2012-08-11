define(['./forEach'], function (forEach) {

    /**
     * Array reduce
     * @version 0.3.0 (2012/07/26)
     */
    function reduce(arr, fn, initVal) {
        // check for args.length since initVal might be "undefined" see #gh-57
        var hasInit = arguments.length > 2,
            result = initVal;

        if (!arr.length && !hasInit) {
            throw new Error('reduce of empty array with no initial value');
        }

        forEach(arr, function (val, i, arr) {
            if (! hasInit) {
                result = val;
                hasInit = true;
            } else {
                result = fn(result, val, i, arr);
            }
        });

        return result;
    }

    return reduce;
});
