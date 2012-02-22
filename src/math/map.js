define(['./lerp', './norm'], function(lerp, norm){
    /**
    * Maps a number from one scale to another.
    * @example map(3, 0, 4, -1, 1) -> 0.5
    * @version 0.1.1 (2011/10/21)
    */
    function map(val, min1, max1, min2, max2){
        return lerp( norm(val, min1, max1), min2, max2 );
    }
    return map;
});
