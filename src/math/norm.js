define(function(){
    /**
    * Gets normalized ratio of value inside range.
    * @version 0.1.0 (2011/08/09)
    */
    function norm(val, min, max){
        return (val - min) / (max - min);
    }
    return norm;
});
