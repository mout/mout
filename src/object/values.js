define(['./forIn'], function (forIn) {

    /**
     * Get object keys
     * @author Miller Medeiros
     * @version 0.1.0 (2011/12/05)
     */

    function values (obj) {
        var vals = [];
        forIn(obj, function(val, key){
            vals.push(val);
        });
        return vals;
    }

    return values;

});
