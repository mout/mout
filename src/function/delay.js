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
     * Calls a function in a given context with a supplied delay. Returns an identifier object.
     */
    function delay(fn, millis, context, args, override){

        args = args != null ? args : [];

        if (override !== false) {
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
     * Stops and clears an already created delay based on it's identifier object.
     */
    delay.clear = function(identifier) {
        var index = findIndex(cache, { id: identifier.id });

        clearTimeout(cache[index].id);
        cache.splice(index, 1);
    }

    return delay;
});
