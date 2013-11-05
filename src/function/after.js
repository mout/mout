define(function () {

    /**
     * Ensure a minimum delay for callbacks
     */
    function after( callback, delay, context ){
        var count = 0;

        function check() {
            if ( ++count > 1 ) {
                callback.call(context);
            }
        }

        setTimeout(check, delay);

        return check;
    }

    return after;

});
