define(['./forIn'], function (forIn) {

    /**
     * Get object keys
     * @version 0.2.0 (2011/12/05)
     * @author Miller Medeiros
     */

     var keys = Object.keys || function (obj) {
            var keys = [];
            forIn(obj, function(val, key){
                keys.push(key);
            });
            return keys;
        };

    return keys;

});
