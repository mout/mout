define(function(){

    /**
     * Return a copy of the object, filtered to only have values for the whitelisted keys.
     * @version 0.1.0 (2012/09/26)
     */
    function pick(obj, var_keys){
        var keys = typeof arguments[1] !== 'string'? arguments[1] : Array.prototype.slice.call(arguments, 1),
            out = {},
            i = 0, key;
        while (key = keys[i++]) {
            out[key] = obj[key];
        }
        return out;
    }

    return pick;

});
