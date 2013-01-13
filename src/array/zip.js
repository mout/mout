define(['./max', './pluck'], function (max, pluck) {

    /**
     * Merges together the values of each of the arrays with the values at the
     * corresponding position.
     */
    function zip(arr){
        var len = arr? max(pluck(arguments, 'length')) : 0,
            result = new Array(len),
            i = -1;
        while (++i < len){
            result[i] = pluck(arguments, i);
        }
        return result;
    }

    return zip;

});
