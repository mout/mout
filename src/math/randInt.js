define(['../number/MIN_INT', '../number/MAX_INT', '../number/toInt', './countSteps'], function(MIN_INT, MAX_INT, toInt, countSteps){

    /**
     * Gets random integer inside range or snap to min/max values.
     * @version 0.3.0 (2011/11/15)
     * @author Miller Medeiros
     */
    function randInt(min, max, shouldSnap){
        min = min == null? MIN_INT : toInt(min);
        max = min == null? MAX_INT : toInt(max);

        var rnd = Math.random(),
            diff = max - min;

        if (shouldSnap || diff < 2) {
            return rnd < 0.5? min : max;
        }

        return min + countSteps(rnd,  1 / (diff + 1));
    }

    return randInt;
});
