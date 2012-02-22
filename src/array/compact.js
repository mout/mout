define(['./filter'], function (filter) {

    /**
     * Remove all null/undefined items from array.
     * @version 0.1.0 (2011/11/15)
     */
    function compact(arr) {
        return filter(arr, function(val){
            return (val != null);
        });
    }

    return compact;
});
