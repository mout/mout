define(['./hasOwn', '../lang/clone', '../lang/isObject'], function (hasOwn, clone, isObject) {

    /**
     * Deep merge objects.
     * @version 0.2.0 (2012/07/13)
     */
    function merge() {
        var i = 1,
            key, val, obj, target;

        // make sure we don't modify source element and it's properties
        // objects are passed by reference
        target = clone( arguments[0] );

        while (obj = arguments[i++]) {
            for (key in obj) {
                if ( ! hasOwn(obj, key) ) {
                    continue;
                }

                val = obj[key];

                if ( isObject(val) && isObject(target[key]) ){
                    // inception, deep merge objects
                    target[key] = merge(target[key], val);
                } else {
                    // make sure arrays, regexp, date, objects are cloned
                    target[key] = clone(val);
                }

            }
        }

        return target;
    }

    return merge;

});
