define(['./toArray', '../array/find'], function (toArray, find) {

    /**
     * Return first non void argument
     * @version 0.1.0 (2012/02/28)
     */
    function defaults(var_args){
        return find(toArray(arguments), nonVoid);
    }

    function nonVoid(val){
        return val != null;
    }

    return defaults;

});
