define(['../number/MIN_INT', '../number/MAX_INT', './lerp'], function(MIN_INT, MAX_INT, lerp){

   /**
    * Returns random number inside range or snap to min/max.
    * @version 0.2.1 (2011/11/16)
    * @author Miller Medeiros
    */
    function rand(min, max, shouldSnap){
        min = min == null? MIN_INT : min;
        max = max == null? MAX_INT : max;
        var rnd = Math.random();
        return shouldSnap? (rnd < 0.5? min : max) : lerp(rnd, min, max);
    }

    return rand;
});
