define(['./indexOf'], function(indexOf){

    /**
     * Remove a single item from the array.
     * (it won't remove duplicates, just a single item)
     * @version 0.1.0 (2011/10/18)
     */
    function remove(arr, item){
        var idx = indexOf(arr, item);
        arr.splice(idx, 1);
    }

    return remove;
});
