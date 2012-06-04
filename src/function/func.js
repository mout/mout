define(function () {

    /**
     * Returns a function that call a method on the passed object
     * @version 0.1.0 (2012/06/04)
     */
    function func(name){
        return function(obj){
            return obj[name]();
        };
    }

    return func;

});
