define(['./map', '../function/prop'], function (map, prop) {

    /**
     * Extract a list of property values.
     */
    function pluck(arr, propName){
        return map(arr, prop(propName));
    }

    return pluck;

});
