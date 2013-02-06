define(function () {

    /**
     * Get sign of the value.
     */
    function sign(val) {
    	if (val === 0) return 0;

        return val < 0? -1 : 1;
    }

    return sign;

});
