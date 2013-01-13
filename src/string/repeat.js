define(function(){

    /**
     * Repeat string n times
     */
     function repeat(str, n){
        return (new Array(n + 1)).join(str);
     }

     return repeat;

});
