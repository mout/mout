define(function(){

    /**
     * Check if array contains any `undefined` items (sparse array).
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/28)
     */
    function isSparse(arr){
        for(var i = 0, n = arr.length; i < n; i += 1){
            if(typeof arr[i] === 'undefined'){
                return true;
            }
        }
        return false;
    }
    return isSparse;
});
