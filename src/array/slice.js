define(function () {

    var arrSlice = Array.prototype.slice;

    /**
     * Create slice of source array or array-like object
     */
    function slice(arr, start, end){
        if (typeof start === 'undefined') {
            start = 0;
        }
        if (typeof end === 'undefined') {
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
