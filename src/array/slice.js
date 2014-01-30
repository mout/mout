define(function () {

    var arrSlice = Array.prototype.slice;

    /**
     * Create slice of source array or array-like object
     */
    function slice(arr, start, end){
        if (start == null) {
            start = 0;
        } else if (start < 0) {
            start = arr.length + start;
        }

        if (end == null) {
            end = arr.length;
        } else if (end < 0) {
            end = arr.length + end;
        }

        var result = [];
        while (start < end) {
            result.push(arr[start++]);
        }

        return result;
    }

    return slice;

});
