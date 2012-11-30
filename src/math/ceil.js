define(['./floor'], function(floor){

    /**
     * Round value up with a custom radix.
     * @version 0.1.0 (2012/11/30)
     */
    function ceil(val, step){
        step = step || 1;
        return val % step? floor(val + Math.abs(step), step) : val;
    }

    return ceil;

});
