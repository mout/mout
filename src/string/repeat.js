define(function(){

    /**
     * Repeat string n times
     * @version 0.1.0 (2011/12/07)
     */
     function repeat(str, n){
        return (new Array(n + 1)).join(str);
     }

     return repeat;

});
