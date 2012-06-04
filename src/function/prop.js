define(function () {

    /**
     * Returns a function that gets a property of the passed object
     * @version 0.1.0 (2012/06/04)
     */
    function prop(name){
        return function(obj){
            return obj[name];
        };
    }

    return prop;

});
