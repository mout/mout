define(function () {

    /**
     * Calls closure only after callback is called x times
     */
    function after(closure, times){
        var count = 0;

        return function () {
            if (++count >= times) closure();
        };
    }

    return after;

});
