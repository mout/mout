define(['./random', '../number/MIN_INT', '../number/MAX_INT'], function(random, MIN_INT, MAX_INT){

    /**
     * Returns random number inside range
     * @version 0.4.0 (2012/04/24)
     */
    function rand(min, max){
        min = min == null? MIN_INT : min;
        max = max == null? MAX_INT : max;
        return min + (max - min) * random();
    }

    return rand;
});
