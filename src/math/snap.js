define(['./countSteps'], function(countSteps){
    /**
    * Snap value to full steps.
    * @version 0.1.0 (2011/08/09)
    */
    function snap(val, step){
        return countSteps(val, step) * step;
    }
    return snap;
});
