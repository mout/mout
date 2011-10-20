define(['../number', './lerp'], function(numberUtils, lerp){
   /**
    * @param {number} [min] Minimum value. Defaults to `numberhUtils.MIN_INT`
    * @param {number} [max] Maximum value. Default to `numberUtils.MAX_INT`
    * @param {boolean} [shouldSnap] If it should snap random number to min/max.
    * @return {number} random number inside range or snap to min/max values.
    * @version 0.1.0 (2011/08/10)
    * @author Miller Medeiros
    */
    function random(min, max, shouldSnap){
        min = (min != null)? min : numberUtils.MIN_INT;
        max = (max != null)? max : numberUtils.MAX_INT;
        var rnd = Math.random();
        return shouldSnap? (rnd < 0.5? min : max) : lerp(rnd, min, max);
    }

    return random;
});
