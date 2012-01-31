define(['./get', '../lang/isUndefined'], function (get, isUndefined) {

    /**
     * Check if object has nested property.
     * @author Miller Medeiros
     * @version 0.1.0 (2012/01/31)
     */
    function has(obj, prop){
        return !isUndefined(get(obj, prop));
    }

    return has;

});

