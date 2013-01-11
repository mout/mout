define(function(){
    /**
     * Round value up with a custom radix.
     * @version 0.1.0 (2012/11/30)
     */
    function ceil(val, step){
        step = Math.abs(step || 1);
        return Math.ceil(val / step) * step;
    }

    return ceil;
});
