define(['./forOwn'], function (forOwn) {

    /**
     * Get object values
     * @version 0.2.0 (2011/12/17)
     */
    function values(obj) {
        var vals = [];
        forOwn(obj, function(val, key){
            vals.push(val);
        });
        return vals;
    }

    return values;

});
