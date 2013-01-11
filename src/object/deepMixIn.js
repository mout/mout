define(['./forOwn', '../lang/isPlainObject'], function (forOwn, isPlainObject) {

    /**
     * Mixes objects into the target object, recursively mixing existing child
     * objects.
     * @version 0.1.1 (2012/11/08)
     */
    function deepMixIn(target, objects) {
        var i = 0,
            n = arguments.length,
            obj;

        while(++i < n){
            obj = arguments[i];
            if (obj) {
                forOwn(obj, copyProp, target);
            }
        }

        return target;
    }

    function copyProp(val, key) {
        var existing = this[key];
        if (isPlainObject(val) && isPlainObject(existing)) {
            deepMixIn(existing, val);
        } else {
            this[key] = val;
        }
    }

    return deepMixIn;

});
