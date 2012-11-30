define(['./countSteps'], function(countSteps){
    /**
    * Floor value to full steps.
    * @version 0.2.0 (2012/11/30)
    */
    function floor(val, step){
        step = step || 1;
        return countSteps(val, step) * step;
    }
    return floor;
});
