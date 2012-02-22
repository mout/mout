define(function(){
    /**
    * Count number of full steps.
    * @version 0.2.0 (2011/10/21)
    */
    function countSteps(val, step, overflow){
        //if (val/step == 0) mod oveflow will return NaN, so ~~ converts it to 0
        return overflow? ~~(Math.floor(val / step) % overflow) : Math.floor(val / step);
    }
    return countSteps;
});
