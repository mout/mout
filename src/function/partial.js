define(['../array/slice'], function (slice) {

    /**
     * Creates a partially applied function.
     */
    function partial(f) {
        var as = slice(arguments, 1);
        return function () {
            var args = as.concat(slice(arguments, 0));
            for (var i = args.length; i >= 0; i--) {
                if (args[i] === undefined) {
                    args[i] = args.splice(-1)[0];
                }
            }
            return f.apply(this, args);
        };
    }

    return partial;

});
