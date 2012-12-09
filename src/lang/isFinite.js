define(['./isNumber'], function (isNumber) {

    var global = this;

    /**
     * Check if value is finite
     * @version 0.1.2 (2012/12/09)
     */
    function isFinite(val){
        var is = false;
        if (typeof val === 'string' && val !== '') {
            is = global.isFinite( parseFloat(val) );
        } else if (isNumber(val)){
            // need to use isNumber because of Number constructor
            is = global.isFinite( val );
        }
        return is;
    }

    return isFinite;

});
