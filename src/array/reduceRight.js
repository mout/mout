define(function () {

    var _nativeReduceRight = Array.prototype.reduceRight;

    /**
     * ES5 Array.reduceRight
     * @author Miller Medeiros
     * @version 0.1.1 (2011/11/15)
     */
    function reduceRight(arr, fn, initVal) {
        var hasInit = typeof initVal !== 'undefined';
        if (_nativeReduceRight && arr.reduceRight === _nativeReduceRight) {
            return hasInit ? arr.reduceRight(fn, initVal) : arr.reduceRight(fn);
        } else {
            if (!arr.length && !hasInit) {
                throw new Error('reduce of empty array with no initial value');
            }
            var result = initVal,
                i = arr.length,
                val;
            while (i-- >= 0) {
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
        }
    }

    return reduceRight;
});
