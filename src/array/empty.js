define(['../lang/isArray'], function(isArray) {

    /**
     * Array empty
     */

    function empty(array) {
        var i, len;

        if(!isArray(array)) {
            return [];
        }

        for (i = 0, len = array.length; i < len; i++) {
            array.pop();
        }

        return array;
    }

    return empty;

});