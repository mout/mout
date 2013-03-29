define(function(){

    function slice(arr, offset){
        return Array.prototype.slice.call(arr, offset || 0);
    }

    /**
     * Calls a function in a given context with a supplied delay. Returns the timeout identifier.
     * @param {Function} fn  Function.
     * @param {Number} millis Delay in milliseconds.
     * @param {object} context   Execution context.
     * @param {rest} args    Arguments (0...n arguments).
     * @return {number} timeout identifier.
     */
    function delay(fn, millis, context){
        var args = slice(arguments, 3);

        return setTimeout( function() {
            fn.apply(context, args);
        }, millis);
    }

    return delay;
});
