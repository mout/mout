define(function(){
    /**
    * Checks if value is inside the range.
    * @version 0.1.0 (2011/08/09)
    */
    function inRange(val, min, max, threshold){
        threshold = threshold || 0;
        return (val + threshold >= min && val - threshold <= max);
    }

    return inRange;
});
