define(['./isNumber'], function (isNumber) {

    /**
     * Check if value is finite
     * @version 0.1.1 (2012/10/30)
     */
    function isFinite(val){
        var is = false;
        if (typeof val === 'string' && val !== '') {
            is = window.isFinite( parseFloat(val) );
        } else if (isNumber(val)){
            // need to use isNumber because of Number constructor
            is = window.isFinite( val );
        }
        return is;
    }

    return isFinite;

});
