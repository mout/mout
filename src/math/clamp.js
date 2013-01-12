define(function(){
    /**
     * Clamps value inside range.
     * @version 0.1.0 (2011/08/09)
     */
    function clamp(val, min, max){
        return Math.max(min, Math.min(val, max));
    }
    
    return clamp;
});
