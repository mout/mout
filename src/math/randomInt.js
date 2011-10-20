define(['./random', '../number'], function(random, numberUtils){
    /**
     * Gets random integer inside range or snap to min/max values.
     * @version 0.1.0 (2011/08/10)
     * @author Miller Medeiros
     */
    function randomInt(min, max, shouldSnap){
        return numberUtils.toInt( random(min, max, shouldSnap) );
    }

    return randomInt;
});
