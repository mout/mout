define(['../array/findIndex' ], function(findIndex) {

    var cache = [];

    function cancelDelay(fn) {
        var index = findIndex(cache, { fn: fn });

        while (index > -1) {
            clearTimeout(cache[index].id);
            cache.splice(index, 1);

            index = findIndex(cache, { fn: fn });
        }
    }

    function execute(fn, context, args, identifier) {
        delay.clear(identifier);
        fn.apply(context, args);
    }

    /**
     * Calls a function in a given context with a supplied delay. Returns the timeout identifier.
     * @param {Function} fn       Function.
     * @param {Number} millis     Delay in milliseconds.
     * @param {object} context    Execution context.
     * @param {Array} args        Additional parameters.
     * @param {Boolean} override  Determins if previous delays on this function gets cancelled.
     * @return {Object}           delay identifier object.
     */
    function delay(fn, millis, context, args, override){

        override = override != null ? override : true;
        args = args != null ? args : [];

        if (override === true) {
            cancelDelay(fn);
        }

        var id = setTimeout(function() {
            execute(fn, context, args, identifier);
        }, millis);

        var identifier = {id: id, fn: fn};

        cache.push( identifier );

        return identifier;
    }


    /**
     * Stops and clears an already created delay bassed on it's identifier object.
     * @param {Object} id       Identifier.
     */
    delay.clear = function(identifier) {
        var index = findIndex(cache, { id: identifier.id });

        clearTimeout(cache[index].id);
        cache.splice(index, 1);
    }

    return delay;
});
