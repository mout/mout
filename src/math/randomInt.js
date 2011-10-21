define(['./random', '../number/toInt'], function(random, toInt){
    /**
     * Gets random integer inside range or snap to min/max values.
     * @version 0.2.0 (2011/10/21)
     * @author Miller Medeiros
     */
    function randomInt(min, max, shouldSnap){
        return toInt( random(min, max, shouldSnap) );
    }

    return randomInt;
});
