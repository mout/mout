define(['../array/findIndex'], function(findIndex) {

    var cache = [];

    function slice(arr, offset){
        return Array.prototype.slice.call(arr, offset || 0);
    }

    function remove(fn) {
        var index = findIndex(cache, {fn: fn});

        if (index > -1) {
            cache.splice(index, 1);
        }
    }

    function override(fn) {
        var index = findIndex(cache, {fn: fn});
        var object;

        if (index < 0) {
            object = {};
            cache.push(object);
        } else {
            object = cache[ index ];
            clearTimeout(object.id);
        }

        return object;
    }

    function execute(fn, context, args) {
        remove(fn);
        fn.apply(context, args);
    }


    /**
     * Delays the call of a function within a given context. Overrides any delay on the same function that hasen't executed yet.
     */
    function delay(fn, millis, context) {
        var args = slice(arguments, 3);

        var object = override(fn);

        var id = setTimeout(function() {
            execute(fn, context, args);
        }, millis);

        object.fn = fn;
        object.id = id;

        object.cancel = function() {
            clearTimeout(id);
            remove(fn);
        }

        return object;
    }

    return delay;
});
