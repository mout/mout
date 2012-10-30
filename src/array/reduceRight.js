define(function () {

    /**
     * Array reduceRight
     * @version 0.4.0 (2012/10/30)
     */
    function reduceRight(arr, fn, initVal) {
        // check for args.length since initVal might be "undefined" see #gh-57
        var hasInit = arguments.length > 2,
            result = initVal,
            i = arr.length >>> 0,
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
