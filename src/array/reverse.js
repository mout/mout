define(function () {

    /**
     * Array reverse
     * 
     * Based on code related to...
     * http://stackoverflow.com/questions/5276953/what-is-the-most-efficient-way-to-reverse-an-array-in-javascript
     */
    function reverse(arr) {
        var results = [];
        if (arr == null) {
            return results;
        }
        // Using a "for swap half" technique since it has good cross-browser
        // performance and works with all data types
        // http://jsperf.com/js-array-reverse-vs-while-loop/5
        for (var i = 0, j = arr.length, k; i < j / 2; i += 1) {
            k = j - 1 - i;
            results[i] = arr[k];
            results[k] = arr[i];
        }

        return results;
    }

     return reverse;
});
