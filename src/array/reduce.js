define(['./forEach'], function (forEach) {

    /**
     * ES5 Array.reduce
     * @version 0.2.0 (2011/11/15)
     */
    var reduce = Array.prototype.reduce?
                function (arr, fn, initVal) {
                    return initVal == null? arr.reduce(fn) : arr.reduce(fn, initVal);
                } :
                function (arr, fn, initVal) {
                    var hasInit = typeof initVal !== 'undefined',
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
                };

    return reduce;
});
