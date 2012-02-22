define(['../number/MIN_INT', '../number/MAX_INT', '../number/toInt', './rand'], function(MIN_INT, MAX_INT, toInt, rand){

    /**
     * Gets random integer inside range or snap to min/max values.
     * @version 0.5.0 (2011/11/17)
     */
    function randInt(min, max){
        min = min == null? MIN_INT : toInt(min);
        max = max == null? MAX_INT : toInt(max);
        // can't be max + 0.5 otherwise it will round up if `rand`
        // returns `max` causing it to overflow range.
        // -0.5 and + 0.49 are required to avoid bias caused by rounding
        return Math.round( rand(min - 0.5, max + 0.499999999999) );
    }

    return randInt;
});
