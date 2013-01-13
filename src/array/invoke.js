define(['./forEach'], function (forEach) {

    /**
     * Call `methodName` on each item of the array passing custom arguments if
     * needed.
     */
    function invoke(arr, methodName, var_args){
        var args = Array.prototype.slice.call(arguments, 2);
        forEach(arr, function(item){
            item[methodName].apply(item, args);
        });
        return arr;
    }

    return invoke;
});
