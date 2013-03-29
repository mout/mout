define(['../array/findIndex'], function(findIndex) {

    var cache = [];

    function slice(arr, offset){
        return Array.prototype.slice.call(arr, offset || 0);
    }

    function cancelTimeout(fn) {
        var index = findIndex(cache, {fn: fn});

        if (index > -1) {
            clearTimeout(cache[index].id);
            cache.splice(index, 1);
        }
    }

    function removeTimeout(fn, id) {
        var index = findIndex(cache, {fn: fn, id: id});

        if (index > -1) {
            cache.splice(index, 1);
        }
    }

    /**
     * Calls a function in a given context with a supplied delay. Returns the timeout identifier.
     * @param {Function} fn       Function.
     * @param {Number} millis     Delay in milliseconds.
     * @param {object} context    Execution context.
     * @param {boolean} override  cancel previous delays.
     * @param {rest} args         Arguments (0...n arguments).
     * @return {number} timeout identifier.
     */
    function delay(fn, millis, context, override){

        override = override != null? override : true;

        if (override === true) {
            cancelTimeout(fn);
        }

        var args = slice(arguments, 4);

        var id = setTimeout( function() {
            removeTimeout(fn, id);
            fn.apply(context, args);
        }, millis);


        cache.push( { id: id, fn: fn } );

        return id;
    }

    return delay;
});
