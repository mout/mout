define(['./randInt'], function (randInt) {

    /**
     * Returns a random element from the supplied arguments
     * or from the array (if single argument is an array).
     * @author Miller Medeiros
     * @version 0.1.0 (2011/11/17)
     */
    function choice(items) {
        var target = (arguments.length === 1 && items.length)? items : arguments;
        return target[ randInt(0, target.length - 1) ];
    }

    return choice;

});
