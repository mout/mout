define(['../lang/isArray'], function(isArray){

    function makeCollectionMethod(arrMethod, objMethod) {
        return function(){
            var args = Array.prototype.slice.call(arguments);
            return isArray(args[0])? arrMethod.apply(null, args) : objMethod.apply(null, args);
        };
    }

    return makeCollectionMethod;

});
