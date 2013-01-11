define(function(){
    /**
    * Count number of full steps.
    * @version 0.2.0 (2011/10/21)
    */
    function countSteps(val, step, overflow){
        val = Math.floor(val / step);

        if (overflow) {
            return val % overflow;
        }

        return val;
    }

    return countSteps;
});
