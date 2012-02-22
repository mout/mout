define(['./randInt', '../lang/isArray'], function (randInt, isArray) {

    /**
     * Returns a random element from the supplied arguments
     * or from the array (if single argument is an array).
     * @version 0.1.1 (2011/12/08)
     */
    function choice(items) {
        var target = (arguments.length === 1 && isArray(items))? items : arguments;
        return target[ randInt(0, target.length - 1) ];
    }

    return choice;

});
