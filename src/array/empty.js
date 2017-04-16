define(['../lang/isArray'], function(isArray) {

    /**
     * Array empty
     */

    function empty(array) {
        var i, len;

        if(!isArray(array)) {
            return [];
        }

        array.length = 0;

        return array;
    }

    return empty;

});