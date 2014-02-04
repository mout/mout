define(function () {

    /**
     * Create slice of source array or array-like object
     */
    function slice(arr, start, end){
        if (start == null) {
            start = 0;
        } else if (start < 0) {
            start = Math.max(arr.length + start, 0);
        }

        if (end == null) {
            end = arr.length;
        } else if (end < 0) {
            end = Math.max(arr.length + end, 0);
        }

        var result = [];
        while (start < end) {
            result.push(arr[start++]);
        }

        return result;
    }

    return slice;

});
