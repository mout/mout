define(['./get'], function (get) {

    var UNDEF;

    /**
     * Check if object has nested property.
     * @version 0.2.0 (2012/03/14)
     */
    function has(obj, prop){
        return get(obj, prop) !== UNDEF;
    }

    return has;

});

