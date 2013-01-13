define(function () {

    /**
     * Array reduceRight
     */
    function reduceRight(arr, fn, initVal) {
        // check for args.length since initVal might be "undefined" see #gh-57
        var hasInit = arguments.length > 2,
            result = initVal,
            i = arr.length,
            val;

        if (!i && !hasInit) {
            throw new Error('reduce of empty array with no initial value');
        }

        while (--i >= 0) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            val = arr[i];
            if (! hasInit) {
                result = val;
                hasInit = true;
            } else {
                result = fn(result, val, i, arr);
            }
        }
        return result;
    }

    return reduceRight;
});
