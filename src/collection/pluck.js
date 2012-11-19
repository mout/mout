define(['./map'], function (map) {

    /**
     * Extract a list of property values.
     * @version 0.1.0 (2012/11/13)
     */
    function pluck(list, key) {
        return map(list, function(value) {
            return value[key];
        });
    }

    return pluck;

});
