define(['./indexOf'], function(indexOf){

    /**
     * Remove all instances of an item from array.
     * @author Miller Medeiros
     * @version 0.1.0 (2010/10/20)
     */
    function removeAll(arr, item){
        var idx = 0;
        while (idx = indexOf(arr, item, idx), idx !== -1) {
            arr.splice(idx, 1);
        }
    }

    return removeAll;
});
