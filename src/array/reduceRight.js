define(function () {

    /**
     * ES5 Array.reduceRight
     * @version 0.2.1 (2011/11/25)
     */
    var reduceRight = Array.prototype.reduceRight?
                    function (arr, fn, initVal) {
                        return initVal == null? arr.reduceRight(fn) : arr.reduceRight(fn, initVal);
                    } :
                    function (arr, fn, initVal) {
                        var hasInit = typeof initVal !== 'undefined',
                            result = initVal,
                            i = arr.length >>> 0,
                            val;

                        if (!i && !hasInit) {
                            throw new Error('reduce of empty array with no initial value');
                        }

                        while (--i >= 0) {
                            val = arr[i];
                            if (typeof val !== 'undefined') {
                                if (! hasInit) {
                                    result = val;
                                    hasInit = true;
                                } else {
                                    result = fn(result, val, i, arr);
                                }
                            }
                        }
                        return result;
                    };

    return reduceRight;
});
