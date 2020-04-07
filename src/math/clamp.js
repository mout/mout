
    /**
     * Clamps value inside range.
     */
    function clamp(val, min, max){
        return val < min? min : (val > max? max : val);
    }
    export default clamp;

