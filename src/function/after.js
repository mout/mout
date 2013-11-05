define(function () {

    /**
     * Ensure a minimum delay for callbacks
     */
    function after( callback, delay ){
        var count = 0;
        var args;
        var context;

        setTimeout(function() {
            if ( ++count > 1 ) {
                callback.apply(context, args);
            }
        }, delay);

        return function() {
            if ( ++count > 1 ) {
                callback.apply(this, arguments);
            } else {
                args = arguments;
                context = this;
            }
        };
    }

    return after;

});
