define(function(){
    /**
    * Linear ratio. Gets normalized ratio of value inside range.
    * @version 0.1.0 (2011/08/09)
    * @author Miller Medeiros
    */
    function lratio(val, start, end){
        return (val - start) / (end - start);
    }
    return lratio;
});
