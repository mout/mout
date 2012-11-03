define(['./isNumber'], function (isNumber) {

    /**
     * @version 0.1.0 (2012/10/30)
     */
    function isNaN(val){
        // need to check if it's a number to avoid conflicts with host objects
        return isNumber(val) && val !== val;
    }

    return isNaN;

});
