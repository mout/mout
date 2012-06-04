define(['./map', '../function/prop'], function (map, prop) {

    /**
     * Extract a list of property values.
     * @version 0.1.0 (2012/06/04)
     */
    function pluck(arr, propName){
        return map(arr, prop(propName));
    }

    return pluck;

});
