define(['./forEach'], function (forEach) {

    var _nativeReduce = Array.prototype.reduce;

    /**
     * ES5 Array.reduce
     * @author Miller Medeiros
     * @version 0.1.1 (2011/11/15)
     */
    function reduce(arr, fn, initVal) {
        var hasInit = typeof initVal !== 'undefined';
        if (_nativeReduce && arr.reduce === _nativeReduce) {
            return hasInit ? arr.reduce(fn, initVal) : arr.reduce(fn);
        } else {
            if (!arr.length && !hasInit) {
                throw new Error('reduce of empty array with no initial value');
            }
            var result = initVal;
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
    }

    return reduce;
});
