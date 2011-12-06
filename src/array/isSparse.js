define(function(){

    var undef;

    /**
     * Check if array contains any `undefined` items (sparse array).
     * @author Miller Medeiros
     * @version 0.1.3 (2011/12/06)
     */
    function isSparse(arr){
        for(var i = 0, n = arr.length >>> 0; i < n; i += 1){
            if ( !(i in arr) || arr[i] === undef) {
                return true;
            }
        }
        return false;
    }
    return isSparse;
});
