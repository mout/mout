define(['../array/forEach', './forOwn'], function (forEach, forOwn) {

    /**
     * Deeply copy missing properties in the obj from the defaults.
     * @version 0.1.0 (2012/12/19)
     */
    function deepFillIn(obj, var_defaults){
        forEach(Array.prototype.slice.call(arguments, 1), function(base){
            forOwn(base, function(val, key){
                var curVal = obj[key];
                if (curVal == null) {
                    obj[key] = val;
                } else if (typeof curVal === 'object' && typeof val === 'object') {
                    deepFillIn(curVal, val);
                }
            });
        });
        return obj;
    }

    return deepFillIn;

});
