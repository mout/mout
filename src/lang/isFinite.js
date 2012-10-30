define(function () {

    /**
     * Check if value is finite
     * @version 0.1.0 (2012/10/30)
     */
    function isFinite(val){
        var is = false;
        if (typeof val === 'string' && val !== '') {
            is = window.isFinite( parseFloat(val) );
        } else if (typeof val === 'number'){
            is = window.isFinite( val );
        }
        return is;
    }

    return isFinite;

});
