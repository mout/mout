// use collection/forEach since we also deep merge arrays during the process
define(['../collection/forEach'], function (forEach) {

    /**
     * Mixes objects into the target object, recursively mixing existing child
     * objects and arrays.
     * @version 0.1.1 (2012/11/08)
     */
    function deepMixIn(target, objects) {
        var i = 0,
            n = arguments.length,
            obj;

        while(++i < n){
            obj = arguments[i];
            if (obj) {
                forEach(obj, copyProp, target);
            }
        }

        return target;
    }

    function copyProp(val, key) {
        var existing = this[key];
        // WTFJS: `typeof null === 'object'` so we check if val is truthy.
        // need to use `typeof` check instead of lang/isObject since we also
        // need to deep merge arrays
        if (val && typeof val === 'object' && typeof existing === 'object') {
            deepMixIn(existing, val);
        } else {
            this[key] = val;
        }
    }

    return deepMixIn;

});
