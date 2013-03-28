define(['./forEach'], function (forEach) {

    /**
     * Array reduce
     */
    function reduce(arr, fn, initVal) {
        // check for args.length since initVal might be "undefined" see #gh-57
        var hasInit = arguments.length > 2,
            result = initVal;

        if (arr == null || !arr.length) {
            if (!hasInit) {
                throw new Error('reduce of empty array with no initial value');
            } else {
                return initVal;
            }
        }

        var i = -1, l = arr.length;
        while (++i < l) {
            if (!hasInit) {
                result = arr[i];
                hasInit = true;
            } else {
                result = fn(result, arr[i], i, arr);
            }
        }

        return result;
    }

    return reduce;
});
