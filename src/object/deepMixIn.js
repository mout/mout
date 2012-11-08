define(['./forOwn', '../lang/isObject'], function (forOwn, isObject) {

    /**
     * Mixes objects into the target object, recursively mixing existing child objects also.
     * @version 0.1.0 (2012-11-07)
     */
    function deepMixIn(target, objects) {
        var i = 0,
            n = arguments.length,
            obj;

        while(++i < n){
            obj = arguments[i];
            if (obj != null) {
                forOwn(obj, copyProp, target);
            }
        }

        return target;
    }

    function copyProp(val, key) {
        var existing = this[key];
        if (isObject(val) && isObject(existing)) {
            deepMixIn(existing, val);
        } else {
            this[key] = val;
        }
    }

    return deepMixIn;

});
