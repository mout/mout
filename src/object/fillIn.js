define(['../array/forEach', './forOwn'], function (forEach, forOwn) {

    /**
     * Copy missing properties in the obj from the defaults.
     * @version 0.1.0 (2012/02/25)
     */
    function fillIn(obj, var_defaults){
        forEach(Array.prototype.slice.call(arguments, 1), function(base){
            forOwn(base, function(val, key){
                if (obj[key] == null) {
                    obj[key] = val;
                }
            });
        });
        return obj;
    }

    return fillIn;

});
