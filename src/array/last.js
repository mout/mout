define(["./slice"], function (slice) {

    /**
     * Returns on ore more items from end of array.
     */
    function last(arr, n){
        if (arr == null || arr.length < 1) {
            return null;
        }

        if (typeof n === 'undefined') {
            return arr[arr.length - 1];
        }

        return slice(arr, arr.length - n);
    }

    return last;

});
