define(['../lang/isInteger'], function(isInteger){

    /**
     * internal method used to create other collection modules.
     */
    function makeCollectionMethod(arrMethod, objMethod, defaultReturn) {
        return function(list){
            if (list == null) {
                return defaultReturn;
            }
            // array-like is treated as array
            return (isInteger(list.length))? arrMethod.apply(null, arguments) : objMethod.apply(null, arguments);
        };
    }

    return makeCollectionMethod;

});
