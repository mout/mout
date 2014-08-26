define(function(){
    /**
    * Gets normalized ratio of value inside range.
    */
    function norm(val, min, max){
        return min === max ? val / max : (val - min) / (max - min);
    }
    return norm;
});
