define(['./indexOf'], function(indexOf){

    /**
     * Remove all instances of an item from array.
     * @version 0.1.1 (2012/01/28)
     */
    function removeAll(arr, item){
        var idx = indexOf(arr, item);
        while (idx !== -1) {
            arr.splice(idx, 1);
            idx = indexOf(arr, item, idx);
        }
    }

    return removeAll;
});
