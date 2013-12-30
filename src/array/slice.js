define(function () {

    var arrSlice = Array.prototype.slice;

    /**
     * Create slice of source array or array-like object
     */
    function slice(arr, start, end){
        if (start == null) {
            start = 0;
        }
        if (end == null) {
            end = arr.length;
        }

        var result = [];
        while (start < end) {
            result.push(arr[start++]);
        }

        return result;
    }

    return slice;

});
