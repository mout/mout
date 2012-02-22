define(function(){
    /**
    * Loops value inside range.
    * @version 0.1.0 (2011/08/09)
    */
    function loop(val, min, max){
        return val < min? max : (val > max? min : val);
    }

    return loop;
});
