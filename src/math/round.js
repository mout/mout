define(function () {
    /**
     * Round number to a specific radix
     * @version 0.1.0 (2012/11/27)
     */
    function round(value, radix){
        radix = radix || 1; // default round 1
        return Math.round(value / radix) * radix;
    }

    return round;

});
