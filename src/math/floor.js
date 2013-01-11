define(function(){
    /**
    * Floor value to full steps.
    * @version 0.2.0 (2012/11/30)
    */
    function floor(val, step){
        step = Math.abs(step || 1);
        return Math.floor(val / step) * step;
    }
    return floor;
});
