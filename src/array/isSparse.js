define(function(){

    /**
     * Check if array contains any `undefined` items (sparse array).
     * @author Miller Medeiros
     * @version 0.1.2 (2011/11/25)
     */
    function isSparse(arr){
        for(var i = 0, n = arr.length >>> 0; i < n; i += 1){
            if ( !(i in arr) ) {
                return true;
            }
        }
        return false;
    }
    return isSparse;
});
