define(['../number/MIN_INT', '../number/MAX_INT', '../number/toInt', './rand'], function(MIN_INT, MAX_INT, toInt, rand){

    /**
     * Gets random integer inside range or snap to min/max values.
     * @version 0.4.0 (2011/11/16)
     * @author Miller Medeiros / Fabio Caccamo
     */
    function randInt(min, max, shouldSnap){
        min = min == null? MIN_INT : toInt(min);
        max = max == null? MAX_INT : toInt(max);
        // can't be max + 0.5 otherwise it will round up if `rand`
        // returns `max` causing it to overflow range.
        return Math.round( rand(min - 0.5, max + 0.499999999999, shouldSnap) );
    }

    return randInt;
});
