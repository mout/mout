define(['./lerp', './lratio'], function(lerp, lratio){
    /**
    * Maps a number from one scale to another.
    * @example mathUtils.norm(3, 0, 4, -1, 1) -> 0.5
    * @version 0.1.0 (2011/08/09)
    * @author Miller Medeiros
    */
    function map(val, min1, max1, min2, max2){
        return lerp( lratio(val, min1, max1), min2, max2 );
    }
    return map;
});
