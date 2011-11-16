define(['../number/MIN_INT', '../number/MAX_INT', './lerp'], function(MIN_INT, MAX_INT, lerp){

   /**
    * Returns random number inside range or snap to min/max.
    * @version 0.2.0 (2011/10/21)
    * @author Miller Medeiros
    */
    function rand(min, max, shouldSnap){
        min = (min != null)? min : MIN_INT;
        max = (max != null)? max : MAX_INT;
        var rnd = Math.random();
        return shouldSnap? (rnd < 0.5? min : max) : lerp(rnd, min, max);
    }

    return rand;
});
