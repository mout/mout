define(['./forOwn', '../lang/clone', '../lang/isObject'], function (forOwn, clone, isObject) {

    /**
     * Merges objects into the target object, recursively merging child objects also.
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
            // Clone arrays and other non-object values
            this[key] = clone(val);
        }
    }

    return deepMixIn;

});
