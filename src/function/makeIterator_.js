define(['./prop', '../object/matches'], function(prop, matches) {

    /**
     * Converts argument into a valid iterator.
     * Used internally on most array/object/collection methods that receives a
     * callback/iterator providing a shortcut syntax.
     */
    function makeIterator(src){
        switch(typeof src) {
            case 'object':
                // typeof null == "object"
                return (src != null)? function(val, key, target){
                    return matches(val, src);
                } : src;
            case 'string':
            case 'number':
                return prop(src);
            default:
                return src;
        }
    }

    return makeIterator;

});
