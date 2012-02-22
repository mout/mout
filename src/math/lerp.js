define(function(){
    /**
    * Linear interpolation.
    * IMPORTANT:will return `Infinity` if numbers overflow Number.MAX_VALUE
    * @version 0.1.0 (2011/08/09)
    */
    function lerp(ratio, start, end){
        return start + (end - start) * ratio;
    }

    return lerp;
});
