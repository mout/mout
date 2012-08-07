define(['../lang/isFunction'], function (isFunction) {

    /**
     * Creates an object that holds a lookup for the objects in the array.
     * The key for each value in `arr` is specified by the `key` parameter.
     * If `key` is a function, the function will be called with the value as
     * the parameter and the result will be used for the key. If `key` is a
     * string it will use the property specified by `key` as the key for each
     * value.
     * @version 0.1.0 (2012/08/02)
     */
    function toLookup(arr, key) {
        var result = {},
            value,
            i = -1, n = arr.length;
        if (isFunction(key)) {
            while (++i < n) {
                value = arr[i];
                result[key(value)] = value;
            }
        } else {
            while (++i < n) {
                value = arr[i];
                result[value[key]] = value;
            }
        }
        return result;
    }
    return toLookup;
});
