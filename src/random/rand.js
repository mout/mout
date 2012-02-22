define(['../number/MIN_INT', '../number/MAX_INT', '../math/lerp'], function(MIN_INT, MAX_INT, lerp){

    /**
     * Returns random number inside range or snap to min/max.
     * @version 0.3.0 (2011/11/17)
     */
    function rand(min, max){
        min = min == null? MIN_INT : min;
        max = max == null? MAX_INT : max;
        return lerp(Math.random(), min, max);
    }

    return rand;
});
