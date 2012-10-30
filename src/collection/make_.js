define(['../lang/isArray'], function(isArray){

    /**
     * internal method used to create other collection modules.
     * @version 0.1.0 (2012/10/30)
     */
    function makeCollectionMethod(arrMethod, objMethod) {
        return function(){
            var args = Array.prototype.slice.call(arguments);
            return isArray(args[0])? arrMethod.apply(null, args) : objMethod.apply(null, args);
        };
    }

    return makeCollectionMethod;

});
