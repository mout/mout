define(['../object/forOwn', '../lang/kindOf'], function (forOwn, kindOf) {

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

    function isNativeObject(value) {
        // A native object is one that is not created with a custom constructor
        // function.
        //
        // WTFJS: `typeof null === 'object'` so we check if val is truthy.
        // need to use `typeof` check instead of lang/isObject since we also
        // need to deep merge arrays
        return (value
            && typeof value === 'object'
            && value.constructor === Object);
    }

    function copyProp(val, key) {
        var existing = this[key];
        if (isNativeObject(val) && isNativeObject(existing)) {
            deepMixIn(existing, val);
        } else {
            this[key] = val;
        }
    }

    return deepMixIn;

});
